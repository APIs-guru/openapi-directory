
__doc__ = """ SDK Documentation: https://developers.google.com/speed/docs/insights/v4/getting-started"""
import requests

from . import utils

from .pagespeedapi import Pagespeedapi


SERVERS = [
	"https://www.googleapis.com/pagespeedonline/v4",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/speed/docs/insights/v4/getting-started"""
    pagespeedapi: Pagespeedapi

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.pagespeedapi = Pagespeedapi(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    