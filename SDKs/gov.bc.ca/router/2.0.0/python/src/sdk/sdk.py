import warnings
import requests
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://router.api.gov.bc.ca/",
	"https://routertst.api.gov.bc.ca/",
	"https://routerdlv.api.gov.bc.ca/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def get_directions_output_format_(self, request: operations.GetDirectionsOutputFormatRequest) -> operations.GetDirectionsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/directions.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_distance_between_pairs_output_format_(self, request: operations.GetDistanceBetweenPairsOutputFormatRequest) -> operations.GetDistanceBetweenPairsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/distance/betweenPairs.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistanceBetweenPairsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_distance_output_format_(self, request: operations.GetDistanceOutputFormatRequest) -> operations.GetDistanceOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/distance.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDistanceOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_optimal_directions_output_format_(self, request: operations.GetOptimalDirectionsOutputFormatRequest) -> operations.GetOptimalDirectionsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/optimalDirections.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOptimalDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_optimal_route_output_format_(self, request: operations.GetOptimalRouteOutputFormatRequest) -> operations.GetOptimalRouteOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/optimalRoute.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOptimalRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_route_output_format_(self, request: operations.GetRouteOutputFormatRequest) -> operations.GetRouteOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/route.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_truck_directions_output_format_(self, request: operations.GetTruckDirectionsOutputFormatRequest) -> operations.GetTruckDirectionsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/directions.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_truck_distance_between_pairs_output_format_(self, request: operations.GetTruckDistanceBetweenPairsOutputFormatRequest) -> operations.GetTruckDistanceBetweenPairsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/distance/betweenPairs.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckDistanceBetweenPairsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_truck_distance_output_format_(self, request: operations.GetTruckDistanceOutputFormatRequest) -> operations.GetTruckDistanceOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/distance.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckDistanceOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_truck_optimal_directions_output_format_(self, request: operations.GetTruckOptimalDirectionsOutputFormatRequest) -> operations.GetTruckOptimalDirectionsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/optimalDirections.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckOptimalDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_truck_optimal_route_output_format_(self, request: operations.GetTruckOptimalRouteOutputFormatRequest) -> operations.GetTruckOptimalRouteOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/optimalRoute.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckOptimalRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def get_truck_route_output_format_(self, request: operations.GetTruckRouteOutputFormatRequest) -> operations.GetTruckRouteOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/route.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTruckRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_directions_output_format_(self, request: operations.PostDirectionsOutputFormatRequest) -> operations.PostDirectionsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/directions.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_distance_between_pairs_output_format_(self, request: operations.PostDistanceBetweenPairsOutputFormatRequest) -> operations.PostDistanceBetweenPairsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/distance/betweenPairs.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDistanceBetweenPairsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_distance_output_format_(self, request: operations.PostDistanceOutputFormatRequest) -> operations.PostDistanceOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/distance.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDistanceOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_optimal_directions_output_format_(self, request: operations.PostOptimalDirectionsOutputFormatRequest) -> operations.PostOptimalDirectionsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/optimalDirections.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOptimalDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_optimal_route_output_format_(self, request: operations.PostOptimalRouteOutputFormatRequest) -> operations.PostOptimalRouteOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/optimalRoute.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOptimalRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_route_output_format_(self, request: operations.PostRouteOutputFormatRequest) -> operations.PostRouteOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/route.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_truck_directions_output_format_(self, request: operations.PostTruckDirectionsOutputFormatRequest) -> operations.PostTruckDirectionsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/directions.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_truck_distance_between_pairs_output_format_(self, request: operations.PostTruckDistanceBetweenPairsOutputFormatRequest) -> operations.PostTruckDistanceBetweenPairsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/distance/betweenPairs.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckDistanceBetweenPairsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_truck_distance_output_format_(self, request: operations.PostTruckDistanceOutputFormatRequest) -> operations.PostTruckDistanceOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/distance.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckDistanceOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_truck_optimal_directions_output_format_(self, request: operations.PostTruckOptimalDirectionsOutputFormatRequest) -> operations.PostTruckOptimalDirectionsOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/optimalDirections.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckOptimalDirectionsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_truck_optimal_route_output_format_(self, request: operations.PostTruckOptimalRouteOutputFormatRequest) -> operations.PostTruckOptimalRouteOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/optimalRoute.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckOptimalRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def post_truck_route_output_format_(self, request: operations.PostTruckRouteOutputFormatRequest) -> operations.PostTruckRouteOutputFormatResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/truck/route.{outputFormat}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTruckRouteOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    