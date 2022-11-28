import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CompositeTypes:
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

    
    def deploymentmanager_composite_types_delete(self, request: operations.DeploymentmanagerCompositeTypesDeleteRequest) -> operations.DeploymentmanagerCompositeTypesDeleteResponse:
        r"""Deletes a composite type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerCompositeTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_composite_types_get(self, request: operations.DeploymentmanagerCompositeTypesGetRequest) -> operations.DeploymentmanagerCompositeTypesGetResponse:
        r"""Gets information about a specific composite type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerCompositeTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompositeType])
                res.composite_type = out

        return res

    
    def deploymentmanager_composite_types_insert(self, request: operations.DeploymentmanagerCompositeTypesInsertRequest) -> operations.DeploymentmanagerCompositeTypesInsertResponse:
        r"""Creates a composite type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/compositeTypes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerCompositeTypesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_composite_types_list(self, request: operations.DeploymentmanagerCompositeTypesListRequest) -> operations.DeploymentmanagerCompositeTypesListResponse:
        r"""Lists all composite types for Deployment Manager.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/compositeTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerCompositeTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompositeTypesListResponse])
                res.composite_types_list_response = out

        return res

    
    def deploymentmanager_composite_types_patch(self, request: operations.DeploymentmanagerCompositeTypesPatchRequest) -> operations.DeploymentmanagerCompositeTypesPatchResponse:
        r"""Patches a composite type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerCompositeTypesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def deploymentmanager_composite_types_update(self, request: operations.DeploymentmanagerCompositeTypesUpdateRequest) -> operations.DeploymentmanagerCompositeTypesUpdateResponse:
        r"""Updates a composite type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeploymentmanagerCompositeTypesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    