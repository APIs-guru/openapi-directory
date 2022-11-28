import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AccountPermissionGroups:
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

    
    def dfareporting_account_permission_groups_get(self, request: operations.DfareportingAccountPermissionGroupsGetRequest) -> operations.DfareportingAccountPermissionGroupsGetResponse:
        r"""Gets one account permission group by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/accountPermissionGroups/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingAccountPermissionGroupsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountPermissionGroup])
                res.account_permission_group = out

        return res

    
    def dfareporting_account_permission_groups_list(self, request: operations.DfareportingAccountPermissionGroupsListRequest) -> operations.DfareportingAccountPermissionGroupsListResponse:
        r"""Retrieves the list of account permission groups.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/accountPermissionGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingAccountPermissionGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountPermissionGroupsListResponse])
                res.account_permission_groups_list_response = out

        return res

    