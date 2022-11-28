import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Permissions:
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

    
    def drive_permissions_delete(self, request: operations.DrivePermissionsDeleteRequest) -> operations.DrivePermissionsDeleteResponse:
        r"""Deletes a permission from a file or shared drive.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/permissions/{permissionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivePermissionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drive_permissions_get(self, request: operations.DrivePermissionsGetRequest) -> operations.DrivePermissionsGetResponse:
        r"""Gets a permission by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/permissions/{permissionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivePermissionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Permission])
                res.permission = out

        return res

    
    def drive_permissions_get_id_for_email(self, request: operations.DrivePermissionsGetIDForEmailRequest) -> operations.DrivePermissionsGetIDForEmailResponse:
        r"""Returns the permission ID for an email address.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/permissionIds/{email}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivePermissionsGetIDForEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionID])
                res.permission_id = out

        return res

    
    def drive_permissions_insert(self, request: operations.DrivePermissionsInsertRequest) -> operations.DrivePermissionsInsertResponse:
        r"""Inserts a permission for a file or shared drive.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivePermissionsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Permission])
                res.permission = out

        return res

    
    def drive_permissions_list(self, request: operations.DrivePermissionsListRequest) -> operations.DrivePermissionsListResponse:
        r"""Lists a file's or shared drive's permissions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivePermissionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionList])
                res.permission_list = out

        return res

    
    def drive_permissions_patch(self, request: operations.DrivePermissionsPatchRequest) -> operations.DrivePermissionsPatchResponse:
        r"""Updates a permission using patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/permissions/{permissionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivePermissionsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Permission])
                res.permission = out

        return res

    
    def drive_permissions_update(self, request: operations.DrivePermissionsUpdateRequest) -> operations.DrivePermissionsUpdateResponse:
        r"""Updates a permission.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/permissions/{permissionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivePermissionsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Permission])
                res.permission = out

        return res

    