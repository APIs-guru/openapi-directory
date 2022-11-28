import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Repricingrules:
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

    
    def content_repricingrules_create(self, request: operations.ContentRepricingrulesCreateRequest) -> operations.ContentRepricingrulesCreateResponse:
        r"""Creates a repricing rule for your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/repricingrules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentRepricingrulesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepricingRule])
                res.repricing_rule = out

        return res

    
    def content_repricingrules_delete(self, request: operations.ContentRepricingrulesDeleteRequest) -> operations.ContentRepricingrulesDeleteResponse:
        r"""Deletes a repricing rule in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/repricingrules/{ruleId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentRepricingrulesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_repricingrules_get(self, request: operations.ContentRepricingrulesGetRequest) -> operations.ContentRepricingrulesGetResponse:
        r"""Retrieves a repricing rule from your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/repricingrules/{ruleId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentRepricingrulesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepricingRule])
                res.repricing_rule = out

        return res

    
    def content_repricingrules_list(self, request: operations.ContentRepricingrulesListRequest) -> operations.ContentRepricingrulesListResponse:
        r"""Lists the repricing rules in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/repricingrules", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentRepricingrulesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRepricingRulesResponse])
                res.list_repricing_rules_response = out

        return res

    
    def content_repricingrules_patch(self, request: operations.ContentRepricingrulesPatchRequest) -> operations.ContentRepricingrulesPatchResponse:
        r"""Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/repricingrules/{ruleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentRepricingrulesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RepricingRule])
                res.repricing_rule = out

        return res

    
    def content_repricingrules_repricingreports_list(self, request: operations.ContentRepricingrulesRepricingreportsListRequest) -> operations.ContentRepricingrulesRepricingreportsListResponse:
        r"""Lists the metrics report for a given Repricing rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/repricingrules/{ruleId}/repricingreports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentRepricingrulesRepricingreportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListRepricingRuleReportsResponse])
                res.list_repricing_rule_reports_response = out

        return res

    