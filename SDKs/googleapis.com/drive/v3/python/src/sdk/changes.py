import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Changes:
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

    
    def drive_changes_get_start_page_token(self, request: operations.DriveChangesGetStartPageTokenRequest) -> operations.DriveChangesGetStartPageTokenResponse:
        r"""Gets the starting pageToken for listing future changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/changes/startPageToken"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveChangesGetStartPageTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartPageToken])
                res.start_page_token = out

        return res

    
    def drive_changes_list(self, request: operations.DriveChangesListRequest) -> operations.DriveChangesListResponse:
        r"""Lists the changes for a user or shared drive.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/changes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveChangesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChangeList])
                res.change_list = out

        return res

    
    def drive_changes_watch(self, request: operations.DriveChangesWatchRequest) -> operations.DriveChangesWatchResponse:
        r"""Subscribes to changes for a user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/changes/watch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveChangesWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    