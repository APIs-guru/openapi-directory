
__doc__ = """ SDK Documentation: https://cloud.google.com/asset-inventory/docs/quickstart"""
import requests

from . import utils

from .assets import Assets
from .effectiveiampolicies import EffectiveIamPolicies
from .feeds import Feeds
from .savedqueries import SavedQueries
from .v1 import V1


SERVERS = [
	"https://cloudasset.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://cloud.google.com/asset-inventory/docs/quickstart"""
    assets: Assets
    effective_iam_policies: EffectiveIamPolicies
    feeds: Feeds
    saved_queries: SavedQueries
    v1: V1

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
        
        self.assets = Assets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.effective_iam_policies = EffectiveIamPolicies(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.feeds = Feeds(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.saved_queries = SavedQueries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.v1 = V1(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    