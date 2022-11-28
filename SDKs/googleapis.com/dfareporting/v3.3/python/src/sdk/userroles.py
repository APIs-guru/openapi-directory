import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class UserRoles:
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

    
    def dfareporting_user_roles_delete(self, request: operations.DfareportingUserRolesDeleteRequest) -> operations.DfareportingUserRolesDeleteResponse:
        r"""Deletes an existing user role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/userRoles/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingUserRolesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def dfareporting_user_roles_get(self, request: operations.DfareportingUserRolesGetRequest) -> operations.DfareportingUserRolesGetResponse:
        r"""Gets one user role by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/userRoles/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingUserRolesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRole])
                res.user_role = out

        return res

    
    def dfareporting_user_roles_insert(self, request: operations.DfareportingUserRolesInsertRequest) -> operations.DfareportingUserRolesInsertResponse:
        r"""Inserts a new user role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/userRoles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingUserRolesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRole])
                res.user_role = out

        return res

    
    def dfareporting_user_roles_list(self, request: operations.DfareportingUserRolesListRequest) -> operations.DfareportingUserRolesListResponse:
        r"""Retrieves a list of user roles, possibly filtered. This method supports paging.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/userRoles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingUserRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRolesListResponse])
                res.user_roles_list_response = out

        return res

    
    def dfareporting_user_roles_patch(self, request: operations.DfareportingUserRolesPatchRequest) -> operations.DfareportingUserRolesPatchResponse:
        r"""Updates an existing user role. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/userRoles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingUserRolesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRole])
                res.user_role = out

        return res

    
    def dfareporting_user_roles_update(self, request: operations.DfareportingUserRolesUpdateRequest) -> operations.DfareportingUserRolesUpdateResponse:
        r"""Updates an existing user role.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/userRoles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingUserRolesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserRole])
                res.user_role = out

        return res

    