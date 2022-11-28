import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Organizations:
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

    
    def securitycenter_organizations_assets_group(self, request: operations.SecuritycenterOrganizationsAssetsGroupRequest) -> operations.SecuritycenterOrganizationsAssetsGroupResponse:
        r"""Filters an organization's assets and groups them by their specified properties.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/assets:group", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsAssetsGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupAssetsResponse])
                res.group_assets_response = out

        return res

    
    def securitycenter_organizations_assets_list(self, request: operations.SecuritycenterOrganizationsAssetsListRequest) -> operations.SecuritycenterOrganizationsAssetsListResponse:
        r"""Lists an organization's assets.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/assets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsAssetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAssetsResponse])
                res.list_assets_response = out

        return res

    
    def securitycenter_organizations_assets_run_discovery(self, request: operations.SecuritycenterOrganizationsAssetsRunDiscoveryRequest) -> operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse:
        r"""Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/assets:runDiscovery", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsAssetsRunDiscoveryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def securitycenter_organizations_operations_cancel(self, request: operations.SecuritycenterOrganizationsOperationsCancelRequest) -> operations.SecuritycenterOrganizationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def securitycenter_organizations_operations_delete(self, request: operations.SecuritycenterOrganizationsOperationsDeleteRequest) -> operations.SecuritycenterOrganizationsOperationsDeleteResponse:
        r"""Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsOperationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def securitycenter_organizations_sources_create(self, request: operations.SecuritycenterOrganizationsSourcesCreateRequest) -> operations.SecuritycenterOrganizationsSourcesCreateResponse:
        r"""Creates a source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/sources", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Source])
                res.source = out

        return res

    
    def securitycenter_organizations_sources_findings_create(self, request: operations.SecuritycenterOrganizationsSourcesFindingsCreateRequest) -> operations.SecuritycenterOrganizationsSourcesFindingsCreateResponse:
        r"""Creates a finding. The corresponding source must exist for finding creation to succeed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/findings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesFindingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudSecuritycenterV1beta1Finding])
                res.google_cloud_securitycenter_v1beta1_finding = out

        return res

    
    def securitycenter_organizations_sources_findings_group(self, request: operations.SecuritycenterOrganizationsSourcesFindingsGroupRequest) -> operations.SecuritycenterOrganizationsSourcesFindingsGroupResponse:
        r"""Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/findings:group", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesFindingsGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GroupFindingsResponse])
                res.group_findings_response = out

        return res

    
    def securitycenter_organizations_sources_findings_list(self, request: operations.SecuritycenterOrganizationsSourcesFindingsListRequest) -> operations.SecuritycenterOrganizationsSourcesFindingsListResponse:
        r"""Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1beta1/organizations/{organization_id}/sources/-/findings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/findings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesFindingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFindingsResponse])
                res.list_findings_response = out

        return res

    
    def securitycenter_organizations_sources_findings_set_state(self, request: operations.SecuritycenterOrganizationsSourcesFindingsSetStateRequest) -> operations.SecuritycenterOrganizationsSourcesFindingsSetStateResponse:
        r"""Updates the state of a finding.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:setState", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesFindingsSetStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudSecuritycenterV1beta1Finding])
                res.google_cloud_securitycenter_v1beta1_finding = out

        return res

    
    def securitycenter_organizations_sources_findings_update_security_marks(self, request: operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksRequest) -> operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse:
        r"""Updates security marks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesFindingsUpdateSecurityMarksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudSecuritycenterV1beta1SecurityMarks])
                res.google_cloud_securitycenter_v1beta1_security_marks = out

        return res

    
    def securitycenter_organizations_sources_get(self, request: operations.SecuritycenterOrganizationsSourcesGetRequest) -> operations.SecuritycenterOrganizationsSourcesGetResponse:
        r"""Gets a source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Source])
                res.source = out

        return res

    
    def securitycenter_organizations_sources_get_iam_policy(self, request: operations.SecuritycenterOrganizationsSourcesGetIamPolicyRequest) -> operations.SecuritycenterOrganizationsSourcesGetIamPolicyResponse:
        r"""Gets the access control policy on the specified Source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def securitycenter_organizations_sources_list(self, request: operations.SecuritycenterOrganizationsSourcesListRequest) -> operations.SecuritycenterOrganizationsSourcesListResponse:
        r"""Lists all sources belonging to an organization.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/sources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSourcesResponse])
                res.list_sources_response = out

        return res

    
    def securitycenter_organizations_sources_set_iam_policy(self, request: operations.SecuritycenterOrganizationsSourcesSetIamPolicyRequest) -> operations.SecuritycenterOrganizationsSourcesSetIamPolicyResponse:
        r"""Sets the access control policy on the specified Source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def securitycenter_organizations_sources_test_iam_permissions(self, request: operations.SecuritycenterOrganizationsSourcesTestIamPermissionsRequest) -> operations.SecuritycenterOrganizationsSourcesTestIamPermissionsResponse:
        r"""Returns the permissions that a caller has on the specified source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterOrganizationsSourcesTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    