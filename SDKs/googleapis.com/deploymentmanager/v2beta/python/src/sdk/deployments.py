import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Deployments:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def deploymentmanager_deployments_cancel_preview(self, request: operations.DeploymentmanagerDeploymentsCancelPreviewRequest) -> operations.DeploymentmanagerDeploymentsCancelPreviewResponse:
        r"""Cancels and removes the preview currently associated with the deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/cancelPreview", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsCancelPreviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_deployments_delete(self, request: operations.DeploymentmanagerDeploymentsDeleteRequest) -> operations.DeploymentmanagerDeploymentsDeleteResponse:
        r"""Deletes a deployment and all of the resources in the deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_deployments_get(self, request: operations.DeploymentmanagerDeploymentsGetRequest) -> operations.DeploymentmanagerDeploymentsGetResponse:
        r"""Gets information about a specific deployment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Deployment])
                res.deployment = out

        return res

    
    def deploymentmanager_deployments_get_iam_policy(self, request: operations.DeploymentmanagerDeploymentsGetIamPolicyRequest) -> operations.DeploymentmanagerDeploymentsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. May be empty if no such policy or resource exists.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def deploymentmanager_deployments_insert(self, request: operations.DeploymentmanagerDeploymentsInsertRequest) -> operations.DeploymentmanagerDeploymentsInsertResponse:
        r"""Creates a deployment and all of the resources described by the deployment manifest.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_deployments_list(self, request: operations.DeploymentmanagerDeploymentsListRequest) -> operations.DeploymentmanagerDeploymentsListResponse:
        r"""Lists all deployments for a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeploymentsListResponse])
                res.deployments_list_response = out

        return res

    
    def deploymentmanager_deployments_patch(self, request: operations.DeploymentmanagerDeploymentsPatchRequest) -> operations.DeploymentmanagerDeploymentsPatchResponse:
        r"""Patches a deployment and all of the resources described by the deployment manifest.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_deployments_set_iam_policy(self, request: operations.DeploymentmanagerDeploymentsSetIamPolicyRequest) -> operations.DeploymentmanagerDeploymentsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def deploymentmanager_deployments_stop(self, request: operations.DeploymentmanagerDeploymentsStopRequest) -> operations.DeploymentmanagerDeploymentsStopResponse:
        r"""Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}/stop", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_deployments_test_iam_permissions(self, request: operations.DeploymentmanagerDeploymentsTestIamPermissionsRequest) -> operations.DeploymentmanagerDeploymentsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{resource}/testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestPermissionsResponse])
                res.test_permissions_response = out

        return res

    
    def deploymentmanager_deployments_update(self, request: operations.DeploymentmanagerDeploymentsUpdateRequest) -> operations.DeploymentmanagerDeploymentsUpdateResponse:
        r"""Updates a deployment and all of the resources described by the deployment manifest.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/v2beta/projects/{project}/global/deployments/{deployment}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerDeploymentsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    