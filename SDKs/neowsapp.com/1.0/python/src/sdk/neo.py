import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Neo:
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

    
    def browse_near_earth_objects(self, request: operations.BrowseNearEarthObjectsRequest) -> operations.BrowseNearEarthObjectsResponse:
        r"""Browse the Near Earth Objects service
        Retieve a paginated list of Near Earth Objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/rest/v1/neo/browse"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BrowseNearEarthObjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NearEarthObject])
                res.near_earth_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def retrieve_near_earth_object_by_id(self, request: operations.RetrieveNearEarthObjectByIDRequest) -> operations.RetrieveNearEarthObjectByIDResponse:
        r"""Find Near Earth Objects by id
        Retrieve a Near Earth Objects with a given id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/rest/v1/neo/{asteroid_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveNearEarthObjectByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NearEarthObject])
                res.near_earth_object = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    