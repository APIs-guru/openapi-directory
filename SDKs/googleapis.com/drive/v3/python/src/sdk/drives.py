import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Drives:
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

    
    def drive_drives_create(self, request: operations.DriveDrivesCreateRequest) -> operations.DriveDrivesCreateResponse:
        r"""Creates a new shared drive.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/drives"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveDrivesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Drive])
                res.drive = out

        return res

    
    def drive_drives_delete(self, request: operations.DriveDrivesDeleteRequest) -> operations.DriveDrivesDeleteResponse:
        r"""Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/drives/{driveId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveDrivesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drive_drives_get(self, request: operations.DriveDrivesGetRequest) -> operations.DriveDrivesGetResponse:
        r"""Gets a shared drive's metadata by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/drives/{driveId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveDrivesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Drive])
                res.drive = out

        return res

    
    def drive_drives_hide(self, request: operations.DriveDrivesHideRequest) -> operations.DriveDrivesHideResponse:
        r"""Hides a shared drive from the default view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/drives/{driveId}/hide", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveDrivesHideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Drive])
                res.drive = out

        return res

    
    def drive_drives_list(self, request: operations.DriveDrivesListRequest) -> operations.DriveDrivesListResponse:
        r"""Lists the user's shared drives.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/drives"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveDrivesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DriveList])
                res.drive_list = out

        return res

    
    def drive_drives_unhide(self, request: operations.DriveDrivesUnhideRequest) -> operations.DriveDrivesUnhideResponse:
        r"""Restores a shared drive to the default view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/drives/{driveId}/unhide", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveDrivesUnhideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Drive])
                res.drive = out

        return res

    
    def drive_drives_update(self, request: operations.DriveDrivesUpdateRequest) -> operations.DriveDrivesUpdateResponse:
        r"""Updates the metadate for a shared drive.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/drives/{driveId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveDrivesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Drive])
                res.drive = out

        return res

    