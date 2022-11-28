

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://palabras-aleatorias-public-api.herokuapp.com",
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
        
    
    
    
    def get_add_word(self, request: operations.GetAddWordRequest) -> operations.GetAddWordResponse:
        r"""Add new word
        Add a new word. Need to be accepted by a human.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/add-word"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddWordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_count(self) -> operations.GetCountResponse:
        r"""Return the count of words in database
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/count"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_echo(self) -> operations.GetEchoResponse:
        r"""Response with all query params
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/echo"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEchoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_openapi3_json(self) -> operations.GetOpenapi3JSONResponse:
        r"""Response with all query params
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/openapi3.json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOpenapi3JSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_random(self) -> operations.GetRandomResponse:
        r"""Return a random spanish word
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/random"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRandomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    