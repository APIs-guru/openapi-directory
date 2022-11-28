import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Teamdrives:
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

    
    def drive_teamdrives_create(self, request: operations.DriveTeamdrivesCreateRequest) -> operations.DriveTeamdrivesCreateResponse:
        r"""Deprecated use drives.create instead.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teamdrives"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveTeamdrivesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDrive])
                res.team_drive = out

        return res

    
    def drive_teamdrives_delete(self, request: operations.DriveTeamdrivesDeleteRequest) -> operations.DriveTeamdrivesDeleteResponse:
        r"""Deprecated use drives.delete instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teamdrives/{teamDriveId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveTeamdrivesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drive_teamdrives_get(self, request: operations.DriveTeamdrivesGetRequest) -> operations.DriveTeamdrivesGetResponse:
        r"""Deprecated use drives.get instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teamdrives/{teamDriveId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveTeamdrivesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDrive])
                res.team_drive = out

        return res

    
    def drive_teamdrives_list(self, request: operations.DriveTeamdrivesListRequest) -> operations.DriveTeamdrivesListResponse:
        r"""Deprecated use drives.list instead.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teamdrives"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveTeamdrivesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDriveList])
                res.team_drive_list = out

        return res

    
    def drive_teamdrives_update(self, request: operations.DriveTeamdrivesUpdateRequest) -> operations.DriveTeamdrivesUpdateResponse:
        r"""Deprecated use drives.update instead
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teamdrives/{teamDriveId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveTeamdrivesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TeamDrive])
                res.team_drive = out

        return res

    