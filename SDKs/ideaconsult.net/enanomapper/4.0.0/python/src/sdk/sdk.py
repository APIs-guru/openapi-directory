
__doc__ = """ SDK Documentation: https://search.data.enanomapper.net - More information about the Nano safety data"""
import requests

from . import utils

from .facets import Facets
from .search import Search
from .structures import Structures
from .studies import Studies
from .substances import Substances


SERVERS = [
	"https://api.ideaconsult.net/enanomapper",
	"https://api.ideaconsult.net/enanomapper",
	"https://api.ideaconsult.net/enanomapper",
	"https://api.ideaconsult.net/enanomapper",
	"https://api.ideaconsult.net/enanomapper",
	"https://api.ideaconsult.net/enanomapper",
	"https://api.ideaconsult.net/enanomapper",
]


class SDK:
    r"""SDK Documentation: https://search.data.enanomapper.net - More information about the Nano safety data"""
    facets: Facets
    search: Search
    structures: Structures
    studies: Studies
    substances: Substances

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
        
        self.facets = Facets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.search = Search(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.structures = Structures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.studies = Studies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.substances = Substances(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    