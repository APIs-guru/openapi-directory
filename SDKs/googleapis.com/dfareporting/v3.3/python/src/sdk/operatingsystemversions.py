import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class OperatingSystemVersions:
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

    
    def dfareporting_operating_system_versions_get(self, request: operations.DfareportingOperatingSystemVersionsGetRequest) -> operations.DfareportingOperatingSystemVersionsGetResponse:
        r"""Gets one operating system version by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/operatingSystemVersions/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingOperatingSystemVersionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperatingSystemVersion])
                res.operating_system_version = out

        return res

    
    def dfareporting_operating_system_versions_list(self, request: operations.DfareportingOperatingSystemVersionsListRequest) -> operations.DfareportingOperatingSystemVersionsListResponse:
        r"""Retrieves a list of operating system versions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/userprofiles/{profileId}/operatingSystemVersions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DfareportingOperatingSystemVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OperatingSystemVersionsListResponse])
                res.operating_system_versions_list_response = out

        return res

    