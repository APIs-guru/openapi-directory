import requests
from sdk.models import operations
from . import utils

class Resources:
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

    
    def get_areas(self, request: operations.GetAreasRequest) -> operations.GetAreasResponse:
        r"""Lists the geographical areas (e.g. districts) that can be used to filter events.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/areas"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAreasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_events(self, request: operations.GetEventsRequest) -> operations.GetEventsResponse:
        r"""Lists road events
        The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_jurisdiction(self, request: operations.GetJurisdictionRequest) -> operations.GetJurisdictionResponse:
        r"""Lists the jurisdictions publishing data through this Open511 API implementation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jurisdiction"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJurisdictionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_jurisdictiongeography(self, request: operations.GetJurisdictiongeographyRequest) -> operations.GetJurisdictiongeographyResponse:
        r"""Provides the geographical boundaries for all the jurisdictions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/jurisdictiongeography"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJurisdictiongeographyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    