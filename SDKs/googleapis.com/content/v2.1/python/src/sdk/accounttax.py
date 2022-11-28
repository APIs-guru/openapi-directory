import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Accounttax:
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

    
    def content_accounttax_custombatch(self, request: operations.ContentAccounttaxCustombatchRequest) -> operations.ContentAccounttaxCustombatchResponse:
        r"""Retrieves and updates tax settings of multiple accounts in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounttax/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccounttaxCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccounttaxCustomBatchResponse])
                res.accounttax_custom_batch_response = out

        return res

    
    def content_accounttax_get(self, request: operations.ContentAccounttaxGetRequest) -> operations.ContentAccounttaxGetResponse:
        r"""Retrieves the tax settings of the account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounttax/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccounttaxGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountTax])
                res.account_tax = out

        return res

    
    def content_accounttax_list(self, request: operations.ContentAccounttaxListRequest) -> operations.ContentAccounttaxListResponse:
        r"""Lists the tax settings of the sub-accounts in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounttax", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccounttaxListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccounttaxListResponse])
                res.accounttax_list_response = out

        return res

    
    def content_accounttax_update(self, request: operations.ContentAccounttaxUpdateRequest) -> operations.ContentAccounttaxUpdateResponse:
        r"""Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounttax/{accountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccounttaxUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountTax])
                res.account_tax = out

        return res

    