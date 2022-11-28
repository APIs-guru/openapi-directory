import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def orgpolicy_projects_constraints_list(self, request: operations.OrgpolicyProjectsConstraintsListRequest) -> operations.OrgpolicyProjectsConstraintsListResponse:
        r"""Lists `Constraints` that could be applied on the specified resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/constraints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsConstraintsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2ListConstraintsResponse])
                res.google_cloud_orgpolicy_v2_list_constraints_response = out

        return res

    
    def orgpolicy_projects_policies_create(self, request: operations.OrgpolicyProjectsPoliciesCreateRequest) -> operations.OrgpolicyProjectsPoliciesCreateResponse:
        r"""Creates a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Cloud resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/policies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2Policy])
                res.google_cloud_orgpolicy_v2_policy = out

        return res

    
    def orgpolicy_projects_policies_delete(self, request: operations.OrgpolicyProjectsPoliciesDeleteRequest) -> operations.OrgpolicyProjectsPoliciesDeleteResponse:
        r"""Deletes a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or Org Policy does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def orgpolicy_projects_policies_get(self, request: operations.OrgpolicyProjectsPoliciesGetRequest) -> operations.OrgpolicyProjectsPoliciesGetResponse:
        r"""Gets a `Policy` on a resource. If no `Policy` is set on the resource, NOT_FOUND is returned. The `etag` value can be used with `UpdatePolicy()` to update a `Policy` during read-modify-write.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2Policy])
                res.google_cloud_orgpolicy_v2_policy = out

        return res

    
    def orgpolicy_projects_policies_get_effective_policy(self, request: operations.OrgpolicyProjectsPoliciesGetEffectivePolicyRequest) -> operations.OrgpolicyProjectsPoliciesGetEffectivePolicyResponse:
        r"""Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy and evaluating conditions. The returned `Policy` will not have an `etag` or `condition` set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:getEffectivePolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesGetEffectivePolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2Policy])
                res.google_cloud_orgpolicy_v2_policy = out

        return res

    
    def orgpolicy_projects_policies_list(self, request: operations.OrgpolicyProjectsPoliciesListRequest) -> operations.OrgpolicyProjectsPoliciesListResponse:
        r"""Retrieves all of the `Policies` that exist on a particular resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/policies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2ListPoliciesResponse])
                res.google_cloud_orgpolicy_v2_list_policies_response = out

        return res

    
    def orgpolicy_projects_policies_patch(self, request: operations.OrgpolicyProjectsPoliciesPatchRequest) -> operations.OrgpolicyProjectsPoliciesPatchResponse:
        r"""Updates a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2Policy])
                res.google_cloud_orgpolicy_v2_policy = out

        return res

    