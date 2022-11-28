import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Platforms:
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

    
    def versionhistory_platforms_channels_list(self, request: operations.VersionhistoryPlatformsChannelsListRequest) -> operations.VersionhistoryPlatformsChannelsListResponse:
        r"""Returns list of channels that are available for a given platform.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VersionhistoryPlatformsChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListChannelsResponse])
                res.list_channels_response = out

        return res

    
    def versionhistory_platforms_channels_versions_list(self, request: operations.VersionhistoryPlatformsChannelsVersionsListRequest) -> operations.VersionhistoryPlatformsChannelsVersionsListResponse:
        r"""Returns list of version for the given platform/channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VersionhistoryPlatformsChannelsVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVersionsResponse])
                res.list_versions_response = out

        return res

    
    def versionhistory_platforms_channels_versions_releases_list(self, request: operations.VersionhistoryPlatformsChannelsVersionsReleasesListRequest) -> operations.VersionhistoryPlatformsChannelsVersionsReleasesListResponse:
        r"""Returns list of releases of the given version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/releases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VersionhistoryPlatformsChannelsVersionsReleasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReleasesResponse])
                res.list_releases_response = out

        return res

    
    def versionhistory_platforms_list(self, request: operations.VersionhistoryPlatformsListRequest) -> operations.VersionhistoryPlatformsListResponse:
        r"""Returns list of platforms that are available for a given product. The resource \"product\" has no resource name in its name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/platforms", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VersionhistoryPlatformsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPlatformsResponse])
                res.list_platforms_response = out

        return res

    