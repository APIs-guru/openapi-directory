
__doc__ = """ SDK Documentation: https://developers.google.com/webmaster-tools/search-console-api/"""
import requests

from . import utils

from .searchanalytics import Searchanalytics
from .sitemaps import Sitemaps
from .sites import Sites
from .urlinspection import URLInspection
from .urltestingtools import URLTestingTools


SERVERS = [
	"https://searchconsole.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/webmaster-tools/search-console-api/"""
    searchanalytics: Searchanalytics
    sitemaps: Sitemaps
    sites: Sites
    url_inspection: URLInspection
    url_testing_tools: URLTestingTools

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
        
        self.searchanalytics = Searchanalytics(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sitemaps = Sitemaps(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sites = Sites(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.url_inspection = URLInspection(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.url_testing_tools = URLTestingTools(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    