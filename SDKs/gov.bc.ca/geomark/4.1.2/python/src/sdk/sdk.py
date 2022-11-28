
__doc__ = """ SDK Documentation: https://www2.gov.bc.ca/gov/content?id=F6BAF45131954020BCFD2EBCC456F084 - Geomark Web Service"""
import requests

from . import utils

from .boundingbox import BoundingBox
from .create import Create
from .feature import Feature
from .info import Info
from .parts import Parts
from .point import Point


SERVERS = [
	"https://apps.gov.bc.ca/pub/geomark",
	"https://test.apps.gov.bc.ca/pub/geomark",
	"https://delivery.apps.gov.bc.ca/pub/geomark",
]


class SDK:
    r"""SDK Documentation: https://www2.gov.bc.ca/gov/content?id=F6BAF45131954020BCFD2EBCC456F084 - Geomark Web Service"""
    bounding_box: BoundingBox
    create: Create
    feature: Feature
    info: Info
    parts: Parts
    point: Point

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
        
        self.bounding_box = BoundingBox(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.create = Create(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.feature = Feature(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.info = Info(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.parts = Parts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.point = Point(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    