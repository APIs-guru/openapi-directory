

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://mtaa-api.herokuapp.com/api",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def districts_in_a_region(self, request: operations.DistrictsInARegionRequest) -> operations.DistrictsInARegionResponse:
        r"""Returns all districts in region
        Returns a post code and all districts in a specified region
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{country}/{region}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DistrictsInARegionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def tanzania_regions(self, request: operations.TanzaniaRegionsRequest) -> operations.TanzaniaRegionsResponse:
        r"""Returns all regions present in Tanzania
        Fetches all regions present in Tanzania and then return a response as json
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{country}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TanzaniaRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def wards_in_a_district(self, request: operations.WardsInADistrictRequest) -> operations.WardsInADistrictResponse:
        r"""Returns all wards in a district
        Returns all wards in a  specified district and district postcode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{country}/{region}/{district}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WardsInADistrictResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def neighborhood_in_a_street_(self, request: operations.NeighborhoodInAStreetRequest) -> operations.NeighborhoodInAStreetResponse:
        r"""Returns all neighborhood in a street
        Returns all neighborhood in a specified street
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{country}/{region}/{district}/{ward}/{street}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NeighborhoodInAStreetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def streets_in_a_ward(self, request: operations.StreetsInAWardRequest) -> operations.StreetsInAWardResponse:
        r"""Returns all streets in a ward
        Returns all streets in a specified ward and ward postcode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{country}/{region}/{district}/{ward}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StreetsInAWardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    