import requests
from sdk.models import operations
from . import utils

class Directions:
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

    
    def get_directions_output_format_(self, request: operations.GetDirectionsOutputFormatRequest) -> operations.GetDirectionsOutputFormatResponse:
        r"""Get the directions, path, distance and travel time between a series of geographic points
        Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directions.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_optimal_directions_output_format_(self, request: operations.GetOptimalDirectionsOutputFormatRequest) -> operations.GetOptimalDirectionsOutputFormatResponse:
        r"""Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
        Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/optimalDirections.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOptimalDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_truck_directions_output_format_(self, request: operations.GetTruckDirectionsOutputFormatRequest) -> operations.GetTruckDirectionsOutputFormatResponse:
        r"""Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
        Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/directions.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_truck_optimal_directions_output_format_(self, request: operations.GetTruckOptimalDirectionsOutputFormatRequest) -> operations.GetTruckOptimalDirectionsOutputFormatResponse:
        r"""Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
        Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/optimalDirections.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckOptimalDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_directions_output_format_(self, request: operations.PostDirectionsOutputFormatRequest) -> operations.PostDirectionsOutputFormatResponse:
        r"""Get the directions, path, distance and travel time between a series of geographic points
        Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directions.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_optimal_directions_output_format_(self, request: operations.PostOptimalDirectionsOutputFormatRequest) -> operations.PostOptimalDirectionsOutputFormatResponse:
        r"""Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
        Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/optimalDirections.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOptimalDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_truck_directions_output_format_(self, request: operations.PostTruckDirectionsOutputFormatRequest) -> operations.PostTruckDirectionsOutputFormatResponse:
        r"""Get the directions, path, distance and travel time between a series of geographic points
        Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/directions.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_truck_optimal_directions_output_format_(self, request: operations.PostTruckOptimalDirectionsOutputFormatRequest) -> operations.PostTruckOptimalDirectionsOutputFormatResponse:
        r"""Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
        Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/optimalDirections.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckOptimalDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    