

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.mailboxvalidator.com/",
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
        
    
    
    
    def get_v1_email_free(self, request: operations.GetV1EmailFreeRequest) -> operations.GetV1EmailFreeResponse:
        r"""The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/email/free"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetV1EmailFreeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                res.get_v1_email_free_200_application_json_string = r.content

        return res

    