import requests
from typing import Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class ResponsePolicies:
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

    
    def dns_response_policies_create(self, request: operations.DNSResponsePoliciesCreateRequest) -> operations.DNSResponsePoliciesCreateResponse:
        r"""Creates a new Response Policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePoliciesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePolicy])
                res.response_policy = out

        return res

    
    def dns_response_policies_delete(self, request: operations.DNSResponsePoliciesDeleteRequest) -> operations.DNSResponsePoliciesDeleteResponse:
        r"""Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePoliciesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def dns_response_policies_get(self, request: operations.DNSResponsePoliciesGetRequest) -> operations.DNSResponsePoliciesGetResponse:
        r"""Fetches the representation of an existing Response Policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePoliciesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePolicy])
                res.response_policy = out

        return res

    
    def dns_response_policies_list(self, request: operations.DNSResponsePoliciesListRequest) -> operations.DNSResponsePoliciesListResponse:
        r"""Enumerates all Response Policies associated with a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePoliciesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePoliciesListResponse])
                res.response_policies_list_response = out

        return res

    
    def dns_response_policies_patch(self, request: operations.DNSResponsePoliciesPatchRequest) -> operations.DNSResponsePoliciesPatchResponse:
        r"""Applies a partial update to an existing Response Policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePoliciesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePoliciesPatchResponse])
                res.response_policies_patch_response = out

        return res

    
    def dns_response_policies_update(self, request: operations.DNSResponsePoliciesUpdateRequest) -> operations.DNSResponsePoliciesUpdateResponse:
        r"""Updates an existing Response Policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePoliciesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePoliciesUpdateResponse])
                res.response_policies_update_response = out

        return res

    