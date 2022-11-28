import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ObjectAccessControls:
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

    
    def storage_object_access_controls_delete(self, request: operations.StorageObjectAccessControlsDeleteRequest) -> operations.StorageObjectAccessControlsDeleteResponse:
        r"""Permanently deletes the ACL entry for the specified entity on the specified object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}/acl/{entity}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectAccessControlsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def storage_object_access_controls_get(self, request: operations.StorageObjectAccessControlsGetRequest) -> operations.StorageObjectAccessControlsGetResponse:
        r"""Returns the ACL entry for the specified entity on the specified object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}/acl/{entity}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectAccessControlsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectAccessControl])
                res.object_access_control = out

        return res

    
    def storage_object_access_controls_insert(self, request: operations.StorageObjectAccessControlsInsertRequest) -> operations.StorageObjectAccessControlsInsertResponse:
        r"""Creates a new ACL entry on the specified object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}/acl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectAccessControlsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectAccessControl])
                res.object_access_control = out

        return res

    
    def storage_object_access_controls_list(self, request: operations.StorageObjectAccessControlsListRequest) -> operations.StorageObjectAccessControlsListResponse:
        r"""Retrieves ACL entries on the specified object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}/acl", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectAccessControlsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectAccessControls])
                res.object_access_controls = out

        return res

    
    def storage_object_access_controls_patch(self, request: operations.StorageObjectAccessControlsPatchRequest) -> operations.StorageObjectAccessControlsPatchResponse:
        r"""Updates an ACL entry on the specified object. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}/acl/{entity}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectAccessControlsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectAccessControl])
                res.object_access_control = out

        return res

    
    def storage_object_access_controls_update(self, request: operations.StorageObjectAccessControlsUpdateRequest) -> operations.StorageObjectAccessControlsUpdateResponse:
        r"""Updates an ACL entry on the specified object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/o/{object}/acl/{entity}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageObjectAccessControlsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectAccessControl])
                res.object_access_control = out

        return res

    