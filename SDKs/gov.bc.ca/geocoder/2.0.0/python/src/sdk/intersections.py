import requests
from sdk.models import operations
from . import utils

class Intersections:
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

    
    def get_addresses_output_format_(self, request: operations.GetAddressesOutputFormatRequest) -> operations.GetAddressesOutputFormatResponse:
        r"""Geocode an address
        Represents the set of geocoded and standardized sites and intersections whose address best matches a given query address.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/addresses.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressesOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_intersections_intersection_id_output_format_(self, request: operations.GetIntersectionsIntersectionIDOutputFormatRequest) -> operations.GetIntersectionsIntersectionIDOutputFormatResponse:
        r"""Get an intersection by its unique ID
        Represents a individual intersection
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/intersections/{intersectionID}.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntersectionsIntersectionIDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_intersections_near_output_format_(self, request: operations.GetIntersectionsNearOutputFormatRequest) -> operations.GetIntersectionsNearOutputFormatResponse:
        r"""Find intersections near to a geographic point
        Represents intersections near a given point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/intersections/near.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntersectionsNearOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_intersections_nearest_output_format_(self, request: operations.GetIntersectionsNearestOutputFormatRequest) -> operations.GetIntersectionsNearestOutputFormatResponse:
        r"""Find nearest intersection to a geographic point
        Represents the closest intersection to a given point
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/intersections/nearest.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntersectionsNearestOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_intersections_within_output_format_(self, request: operations.GetIntersectionsWithinOutputFormatRequest) -> operations.GetIntersectionsWithinOutputFormatResponse:
        r"""Find intersections in a geographic area
        Represents all intersections within a given area
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/intersections/within.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIntersectionsWithinOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    