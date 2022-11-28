
__doc__ = """ SDK Documentation: https://code.google.com/apis/books/docs/v1/getting_started.html"""
import requests

from . import utils

from .bookshelves import Bookshelves
from .cloudloading import Cloudloading
from .dictionary import Dictionary
from .familysharing import Familysharing
from .layers import Layers
from .myconfig import Myconfig
from .mylibrary import Mylibrary
from .notification import Notification
from .onboarding import Onboarding
from .personalizedstream import Personalizedstream
from .promooffer import Promooffer
from .series import Series
from .volumes import Volumes


SERVERS = [
	"https://books.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://code.google.com/apis/books/docs/v1/getting_started.html"""
    bookshelves: Bookshelves
    cloudloading: Cloudloading
    dictionary: Dictionary
    familysharing: Familysharing
    layers: Layers
    myconfig: Myconfig
    mylibrary: Mylibrary
    notification: Notification
    onboarding: Onboarding
    personalizedstream: Personalizedstream
    promooffer: Promooffer
    series: Series
    volumes: Volumes

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
        
        self.bookshelves = Bookshelves(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.cloudloading = Cloudloading(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.dictionary = Dictionary(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.familysharing = Familysharing(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.layers = Layers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.myconfig = Myconfig(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mylibrary = Mylibrary(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.notification = Notification(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.onboarding = Onboarding(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.personalizedstream = Personalizedstream(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.promooffer = Promooffer(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.series = Series(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.volumes = Volumes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    