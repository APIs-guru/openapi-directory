import requests
from typing import Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class Policies:
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

    
    def dns_policies_create(self, request: operations.DNSPoliciesCreateRequest) -> operations.DNSPoliciesCreateResponse:
        r"""Creates a new Policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/policies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSPoliciesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def dns_policies_delete(self, request: operations.DNSPoliciesDeleteRequest) -> operations.DNSPoliciesDeleteResponse:
        r"""Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/policies/{policy}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSPoliciesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def dns_policies_get(self, request: operations.DNSPoliciesGetRequest) -> operations.DNSPoliciesGetResponse:
        r"""Fetches the representation of an existing Policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/policies/{policy}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSPoliciesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def dns_policies_list(self, request: operations.DNSPoliciesListRequest) -> operations.DNSPoliciesListResponse:
        r"""Enumerates all Policies associated with a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/policies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSPoliciesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoliciesListResponse])
                res.policies_list_response = out

        return res

    
    def dns_policies_patch(self, request: operations.DNSPoliciesPatchRequest) -> operations.DNSPoliciesPatchResponse:
        r"""Applies a partial update to an existing Policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/policies/{policy}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSPoliciesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoliciesPatchResponse])
                res.policies_patch_response = out

        return res

    
    def dns_policies_update(self, request: operations.DNSPoliciesUpdateRequest) -> operations.DNSPoliciesUpdateResponse:
        r"""Updates an existing Policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/policies/{policy}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSPoliciesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PoliciesUpdateResponse])
                res.policies_update_response = out

        return res

    