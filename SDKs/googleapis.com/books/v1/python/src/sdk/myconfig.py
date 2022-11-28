import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Myconfig:
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

    
    def books_myconfig_get_user_settings(self, request: operations.BooksMyconfigGetUserSettingsRequest) -> operations.BooksMyconfigGetUserSettingsResponse:
        r"""Gets the current settings for the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/myconfig/getUserSettings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMyconfigGetUserSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Usersettings])
                res.usersettings = out

        return res

    
    def books_myconfig_release_download_access(self, request: operations.BooksMyconfigReleaseDownloadAccessRequest) -> operations.BooksMyconfigReleaseDownloadAccessResponse:
        r"""Release downloaded content access restriction.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/myconfig/releaseDownloadAccess"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMyconfigReleaseDownloadAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DownloadAccesses])
                res.download_accesses = out

        return res

    
    def books_myconfig_request_access(self, request: operations.BooksMyconfigRequestAccessRequest) -> operations.BooksMyconfigRequestAccessResponse:
        r"""Request concurrent and download access restrictions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/myconfig/requestAccess"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMyconfigRequestAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RequestAccessData])
                res.request_access_data = out

        return res

    
    def books_myconfig_sync_volume_licenses(self, request: operations.BooksMyconfigSyncVolumeLicensesRequest) -> operations.BooksMyconfigSyncVolumeLicensesResponse:
        r"""Request downloaded content access for specified volumes on the My eBooks shelf.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/myconfig/syncVolumeLicenses"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMyconfigSyncVolumeLicensesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumes])
                res.volumes = out

        return res

    
    def books_myconfig_update_user_settings(self, request: operations.BooksMyconfigUpdateUserSettingsRequest) -> operations.BooksMyconfigUpdateUserSettingsResponse:
        r"""Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/myconfig/updateUserSettings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMyconfigUpdateUserSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Usersettings])
                res.usersettings = out

        return res

    