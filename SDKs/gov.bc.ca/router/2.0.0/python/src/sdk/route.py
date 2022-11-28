import requests
from sdk.models import operations
from . import utils

class Route:
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

    
    def get_optimal_route_output_format_(self, request: operations.GetOptimalRouteOutputFormatRequest) -> operations.GetOptimalRouteOutputFormatResponse:
        r"""Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
        Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/optimalRoute.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOptimalRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_route_output_format_(self, request: operations.GetRouteOutputFormatRequest) -> operations.GetRouteOutputFormatResponse:
        r"""Get the path, distance and travel time between a series of geographic points
        Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/route.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_truck_optimal_route_output_format_(self, request: operations.GetTruckOptimalRouteOutputFormatRequest) -> operations.GetTruckOptimalRouteOutputFormatResponse:
        r"""Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
        Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/optimalRoute.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckOptimalRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_truck_route_output_format_(self, request: operations.GetTruckRouteOutputFormatRequest) -> operations.GetTruckRouteOutputFormatResponse:
        r"""Get the path, distance and travel time between a series of geographic points for a commercial vehicle
        Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/route.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_optimal_route_output_format_(self, request: operations.PostOptimalRouteOutputFormatRequest) -> operations.PostOptimalRouteOutputFormatResponse:
        r"""Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
        Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/optimalRoute.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOptimalRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_route_output_format_(self, request: operations.PostRouteOutputFormatRequest) -> operations.PostRouteOutputFormatResponse:
        r"""Get the path, distance and travel time between a series of geographic points
        Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/route.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_truck_optimal_route_output_format_(self, request: operations.PostTruckOptimalRouteOutputFormatRequest) -> operations.PostTruckOptimalRouteOutputFormatResponse:
        r"""Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
        Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/optimalRoute.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckOptimalRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_truck_route_output_format_(self, request: operations.PostTruckRouteOutputFormatRequest) -> operations.PostTruckRouteOutputFormatResponse:
        r"""Get the path, distance and travel time between a series of geographic points
        Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/truck/route.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    