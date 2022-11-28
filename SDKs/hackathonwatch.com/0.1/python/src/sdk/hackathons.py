import requests
from sdk.models import operations
from . import utils

class Hackathons:
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

    
    def get_hackathons_id_format_(self, request: operations.GetHackathonsIDFormatRequest) -> operations.GetHackathonsIDFormatResponse:
        r"""Return the detail of a given hackathon
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hackathons/{id}.json", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHackathonsIDFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_hackathons_coming_format_(self, request: operations.GetHackathonsComingFormatRequest) -> operations.GetHackathonsComingFormatResponse:
        r"""Return a list of coming hackathons
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hackathons/coming.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHackathonsComingFormatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    