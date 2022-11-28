import requests
from sdk.models import operations
from . import utils

class Distance:
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

    
    def get_distance_between_pairs_output_format_(self, request: operations.GetDistanceBetweenPairsOutputFormatRequest) -> operations.GetDistanceBetweenPairsOutputFormatResponse:
        r"""Get distance and travel time between each pair of geographic points
        Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/distance/betweenPairs.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistanceBetweenPairsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_distance_output_format_(self, request: operations.GetDistanceOutputFormatRequest) -> operations.GetDistanceOutputFormatResponse:
        r"""Get distance and travel time between two geographic points
        Represents the distance and time of the shortest or fastest path between given start and end points.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/distance.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistanceOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_truck_distance_between_pairs_output_format_(self, request: operations.GetTruckDistanceBetweenPairsOutputFormatRequest) -> operations.GetTruckDistanceBetweenPairsOutputFormatResponse:
        r"""Get distance and travel time between each pair of geographic points for a commercial vehicle
        Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/distance/betweenPairs.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckDistanceBetweenPairsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_truck_distance_output_format_(self, request: operations.GetTruckDistanceOutputFormatRequest) -> operations.GetTruckDistanceOutputFormatResponse:
        r"""Get distance and travel time between two geographic points for a commercial vehicle
        Represents the distance and time of the shortest or fastest path between given start and end points.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/distance.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckDistanceOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_distance_between_pairs_output_format_(self, request: operations.PostDistanceBetweenPairsOutputFormatRequest) -> operations.PostDistanceBetweenPairsOutputFormatResponse:
        r"""Get distance and travel time between each pair of geographic points
        Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/distance/betweenPairs.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDistanceBetweenPairsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_distance_output_format_(self, request: operations.PostDistanceOutputFormatRequest) -> operations.PostDistanceOutputFormatResponse:
        r"""Get distance and travel time between two geographic points
        Represents the distance and time of the shortest or fastest path between given start and end points.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/distance.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDistanceOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_truck_distance_between_pairs_output_format_(self, request: operations.PostTruckDistanceBetweenPairsOutputFormatRequest) -> operations.PostTruckDistanceBetweenPairsOutputFormatResponse:
        r"""Get distance and travel time between each pair of geographic points
        Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/distance/betweenPairs.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckDistanceBetweenPairsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_truck_distance_output_format_(self, request: operations.PostTruckDistanceOutputFormatRequest) -> operations.PostTruckDistanceOutputFormatResponse:
        r"""Get distance and travel time between two geographic points
        Represents the distance and time of the shortest or fastest path between given start and end points.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/distance.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckDistanceOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    