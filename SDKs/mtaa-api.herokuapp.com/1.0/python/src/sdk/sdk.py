import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://mtaa-api.herokuapp.com/api",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def districts_in_a_region(self, request: operations.DistrictsInARegionRequest) -> operations.DistrictsInARegionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{country}/{region}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DistrictsInARegionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def tanzania_regions(self, request: operations.TanzaniaRegionsRequest) -> operations.TanzaniaRegionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{country}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TanzaniaRegionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def wards_in_a_district(self, request: operations.WardsInADistrictRequest) -> operations.WardsInADistrictResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{country}/{region}/{district}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WardsInADistrictResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def neighborhood_in_a_street_(self, request: operations.NeighborhoodInAStreetRequest) -> operations.NeighborhoodInAStreetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{country}/{region}/{district}/{ward}/{street}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NeighborhoodInAStreetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def streets_in_a_ward(self, request: operations.StreetsInAWardRequest) -> operations.StreetsInAWardResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/{country}/{region}/{district}/{ward}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StreetsInAWardResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    