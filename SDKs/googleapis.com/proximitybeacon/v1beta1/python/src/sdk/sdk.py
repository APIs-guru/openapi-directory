
__doc__ = """ SDK Documentation: https://developers.google.com/beacons/proximity/"""
import requests

from . import utils

from .beaconinfo import Beaconinfo
from .beacons import Beacons
from .namespaces import Namespaces
from .v1beta1 import V1beta1


SERVERS = [
	"https://proximitybeacon.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/beacons/proximity/"""
    beaconinfo: Beaconinfo
    beacons: Beacons
    namespaces: Namespaces
    v1beta1: V1beta1

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
        
        self.beaconinfo = Beaconinfo(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.beacons = Beacons(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.namespaces = Namespaces(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1beta1 = V1beta1(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    