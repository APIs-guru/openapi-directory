import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Activities:
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

    
    def plus_activities_get(self, request: operations.PlusActivitiesGetRequest) -> operations.PlusActivitiesGetResponse:
        r"""Shut down. See https://developers.google.com/+/api-shutdown for more details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/activities/{activityId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlusActivitiesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Activity])
                res.activity = out

        return res

    
    def plus_activities_list(self, request: operations.PlusActivitiesListRequest) -> operations.PlusActivitiesListResponse:
        r"""Shut down. See https://developers.google.com/+/api-shutdown for more details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/people/{userId}/activities/{collection}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlusActivitiesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActivityFeed])
                res.activity_feed = out

        return res

    
    def plus_activities_search(self, request: operations.PlusActivitiesSearchRequest) -> operations.PlusActivitiesSearchResponse:
        r"""Shut down. See https://developers.google.com/+/api-shutdown for more details.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/activities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlusActivitiesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActivityFeed])
                res.activity_feed = out

        return res

    