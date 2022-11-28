
__doc__ = """ SDK Documentation: https://developers.google.com/storage/docs/json_api/"""
import requests

from . import utils

from .bucketaccesscontrols import BucketAccessControls
from .buckets import Buckets
from .channels import Channels
from .defaultobjectaccesscontrols import DefaultObjectAccessControls
from .notifications import Notifications
from .objectaccesscontrols import ObjectAccessControls
from .objects import Objects
from .projects import Projects


SERVERS = [
	"https://storage.googleapis.com/storage/v1",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/storage/docs/json_api/"""
    bucket_access_controls: BucketAccessControls
    buckets: Buckets
    channels: Channels
    default_object_access_controls: DefaultObjectAccessControls
    notifications: Notifications
    object_access_controls: ObjectAccessControls
    objects: Objects
    projects: Projects

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
        
        self.bucket_access_controls = BucketAccessControls(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.buckets = Buckets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.channels = Channels(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.default_object_access_controls = DefaultObjectAccessControls(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.notifications = Notifications(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.object_access_controls = ObjectAccessControls(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.objects = Objects(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.projects = Projects(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    