import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def content_accounts_authinfo(self, request: operations.ContentAccountsAuthinfoRequest) -> operations.ContentAccountsAuthinfoResponse:
        r"""Returns information about the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts/authinfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsAuthinfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsAuthInfoResponse])
                res.accounts_auth_info_response = out

        return res

    
    def content_accounts_claimwebsite(self, request: operations.ContentAccountsClaimwebsiteRequest) -> operations.ContentAccountsClaimwebsiteResponse:
        r"""Claims the website of a Merchant Center sub-account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}/claimwebsite", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsClaimwebsiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsClaimWebsiteResponse])
                res.accounts_claim_website_response = out

        return res

    
    def content_accounts_custombatch(self, request: operations.ContentAccountsCustombatchRequest) -> operations.ContentAccountsCustombatchResponse:
        r"""Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsCustomBatchResponse])
                res.accounts_custom_batch_response = out

        return res

    
    def content_accounts_delete(self, request: operations.ContentAccountsDeleteRequest) -> operations.ContentAccountsDeleteResponse:
        r"""Deletes a Merchant Center sub-account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_accounts_get(self, request: operations.ContentAccountsGetRequest) -> operations.ContentAccountsGetResponse:
        r"""Retrieves a Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def content_accounts_insert(self, request: operations.ContentAccountsInsertRequest) -> operations.ContentAccountsInsertResponse:
        r"""Creates a Merchant Center sub-account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def content_accounts_link(self, request: operations.ContentAccountsLinkRequest) -> operations.ContentAccountsLinkResponse:
        r"""Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}/link", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsLinkResponse])
                res.accounts_link_response = out

        return res

    
    def content_accounts_list(self, request: operations.ContentAccountsListRequest) -> operations.ContentAccountsListResponse:
        r"""Lists the sub-accounts in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountsListResponse])
                res.accounts_list_response = out

        return res

    
    def content_accounts_update(self, request: operations.ContentAccountsUpdateRequest) -> operations.ContentAccountsUpdateResponse:
        r"""Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/accounts/{accountId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentAccountsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    