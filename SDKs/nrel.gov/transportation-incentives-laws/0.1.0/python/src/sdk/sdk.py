

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://nrel.gov/api/transportation-incentives-laws",
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
        
    
    
    
    def get_v1_category_list_output_format_(self, request: operations.GetV1CategoryListOutputFormatRequest) -> operations.GetV1CategoryListOutputFormatResponse:
        r"""Return the law categories for a given category type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/category-list.{output_format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1CategoryListOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_v1_id_output_format_(self, request: operations.GetV1IDOutputFormatRequest) -> operations.GetV1IDOutputFormatResponse:
        r"""Fetch the details of a specific law given the law's ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{id}.{output_format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1IDOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_v1_pocs_output_format_(self, request: operations.GetV1PocsOutputFormatRequest) -> operations.GetV1PocsOutputFormatResponse:
        r"""Get the points of contact for a given jurisdiction.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/pocs.{output_format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1PocsOutputFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def transportation_incentives_laws(self, request: operations.TransportationIncentivesLawsRequest) -> operations.TransportationIncentivesLawsResponse:
        r"""Return a full list of laws and incentives that match your query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1.{output_format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TransportationIncentivesLawsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    