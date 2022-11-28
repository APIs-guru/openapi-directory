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

    
    def mybusinessaccountmanagement_accounts_create(self, request: operations.MybusinessaccountmanagementAccountsCreateRequest) -> operations.MybusinessaccountmanagementAccountsCreateResponse:
        r"""Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementAccountsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def mybusinessaccountmanagement_accounts_get(self, request: operations.MybusinessaccountmanagementAccountsGetRequest) -> operations.MybusinessaccountmanagementAccountsGetResponse:
        r"""Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementAccountsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out

        return res

    
    def mybusinessaccountmanagement_accounts_invitations_accept(self, request: operations.MybusinessaccountmanagementAccountsInvitationsAcceptRequest) -> operations.MybusinessaccountmanagementAccountsInvitationsAcceptResponse:
        r"""Accepts the specified invitation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:accept", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementAccountsInvitationsAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusinessaccountmanagement_accounts_invitations_decline(self, request: operations.MybusinessaccountmanagementAccountsInvitationsDeclineRequest) -> operations.MybusinessaccountmanagementAccountsInvitationsDeclineResponse:
        r"""Declines the specified invitation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:decline", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementAccountsInvitationsDeclineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def mybusinessaccountmanagement_accounts_invitations_list(self, request: operations.MybusinessaccountmanagementAccountsInvitationsListRequest) -> operations.MybusinessaccountmanagementAccountsInvitationsListResponse:
        r"""Lists pending invitations for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/invitations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementAccountsInvitationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInvitationsResponse])
                res.list_invitations_response = out

        return res

    
    def mybusinessaccountmanagement_accounts_list(self, request: operations.MybusinessaccountmanagementAccountsListRequest) -> operations.MybusinessaccountmanagementAccountsListResponse:
        r"""Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessaccountmanagementAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAccountsResponse])
                res.list_accounts_response = out

        return res

    