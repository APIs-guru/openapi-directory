

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"http://api.opendatanetwork.com",
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
        
    
    
    
    def create_a_map(self, request: operations.CreateAMapRequest) -> operations.CreateAMapResponse:
        r"""Create a map
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data/v1/map/new"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAMapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def find_all_available_data_for_some_entities(self, request: operations.FindAllAvailableDataForSomeEntitiesRequest) -> operations.FindAllAvailableDataForSomeEntitiesResponse:
        r"""Find all available data for some entities
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data/v1/availability/"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FindAllAvailableDataForSomeEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def find_the_relatives_of_an_entity(self, request: operations.FindTheRelativesOfAnEntityRequest) -> operations.FindTheRelativesOfAnEntityResponse:
        r"""Find the relatives of an entity
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/entity/v1/{relation}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FindTheRelativesOfAnEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_entities(self, request: operations.GetEntitiesRequest) -> operations.GetEntitiesResponse:
        r"""Get Entities
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/entity/v1"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_constraint_permutations_for_entities(self, request: operations.GetConstraintPermutationsForEntitiesRequest) -> operations.GetConstraintPermutationsForEntitiesResponse:
        r"""Get constraint permutations for entities
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/data/v1/constraint/{variable}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConstraintPermutationsForEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_datasets(self, request: operations.GetDatasetsRequest) -> operations.GetDatasetsResponse:
        r"""Get datasets
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/v1/dataset"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatasetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_questions(self, request: operations.GetQuestionsRequest) -> operations.GetQuestionsResponse:
        r"""Get questions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/v1/question"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_suggestions(self, request: operations.GetSuggestionsRequest) -> operations.GetSuggestionsResponse:
        r"""Get suggestions
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/suggest/v1/{type}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSuggestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_values_for_variables(self, request: operations.GetValuesForVariablesRequest) -> operations.GetValuesForVariablesResponse:
        r"""Get values for variables
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/data/v1/values"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetValuesForVariablesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    