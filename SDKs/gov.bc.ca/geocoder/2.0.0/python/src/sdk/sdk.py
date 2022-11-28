
__doc__ = """ SDK Documentation: https://www2.gov.bc.ca/gov/content?id=118DD57CD9674D57BDBD511C2E78DC0D - BC Address Geocoder"""
import requests
from sdk.models import shared
from . import utils

from .intersections import Intersections
from .occupants import Occupants
from .parcels import Parcels
from .sites import Sites


SERVERS = [
	"https://geocoder.api.gov.bc.ca/",
	"https://geocodertst.api.gov.bc.ca/",
	"https://geocoderdlv.api.gov.bc.ca/",
]


class SDK:
    r"""SDK Documentation: https://www2.gov.bc.ca/gov/content?id=118DD57CD9674D57BDBD511C2E78DC0D - BC Address Geocoder"""
    intersections: Intersections
    occupants: Occupants
    parcels: Parcels
    sites: Sites

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        self._init_sdks()
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.intersections = Intersections(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.occupants = Occupants(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.parcels = Parcels(
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
    
    