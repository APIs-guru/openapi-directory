import requests
from typing import Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class ResponsePolicyRules:
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

    
    def dns_response_policy_rules_create(self, request: operations.DNSResponsePolicyRulesCreateRequest) -> operations.DNSResponsePolicyRulesCreateResponse:
        r"""Creates a new Response Policy Rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePolicyRulesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePolicyRule])
                res.response_policy_rule = out

        return res

    
    def dns_response_policy_rules_delete(self, request: operations.DNSResponsePolicyRulesDeleteRequest) -> operations.DNSResponsePolicyRulesDeleteResponse:
        r"""Deletes a previously created Response Policy Rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePolicyRulesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def dns_response_policy_rules_get(self, request: operations.DNSResponsePolicyRulesGetRequest) -> operations.DNSResponsePolicyRulesGetResponse:
        r"""Fetches the representation of an existing Response Policy Rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePolicyRulesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePolicyRule])
                res.response_policy_rule = out

        return res

    
    def dns_response_policy_rules_list(self, request: operations.DNSResponsePolicyRulesListRequest) -> operations.DNSResponsePolicyRulesListResponse:
        r"""Enumerates all Response Policy Rules associated with a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePolicyRulesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePolicyRulesListResponse])
                res.response_policy_rules_list_response = out

        return res

    
    def dns_response_policy_rules_patch(self, request: operations.DNSResponsePolicyRulesPatchRequest) -> operations.DNSResponsePolicyRulesPatchResponse:
        r"""Applies a partial update to an existing Response Policy Rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePolicyRulesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePolicyRulesPatchResponse])
                res.response_policy_rules_patch_response = out

        return res

    
    def dns_response_policy_rules_update(self, request: operations.DNSResponsePolicyRulesUpdateRequest) -> operations.DNSResponsePolicyRulesUpdateResponse:
        r"""Updates an existing Response Policy Rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dns/v2/projects/{project}/locations/{location}/responsePolicies/{responsePolicy}/rules/{responsePolicyRule}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DNSResponsePolicyRulesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponsePolicyRulesUpdateResponse])
                res.response_policy_rules_update_response = out

        return res

    