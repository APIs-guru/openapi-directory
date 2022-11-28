
__doc__ = """ SDK Documentation: https://developers.google.com/safe-browsing/"""
import requests

from . import utils

from .encodedfullhashes import EncodedFullHashes
from .encodedupdates import EncodedUpdates
from .fullhashes import FullHashes
from .threathits import ThreatHits
from .threatlistupdates import ThreatListUpdates
from .threatlists import ThreatLists
from .threatmatches import ThreatMatches


SERVERS = [
	"https://safebrowsing.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/safe-browsing/"""
    encoded_full_hashes: EncodedFullHashes
    encoded_updates: EncodedUpdates
    full_hashes: FullHashes
    threat_hits: ThreatHits
    threat_list_updates: ThreatListUpdates
    threat_lists: ThreatLists
    threat_matches: ThreatMatches

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
        
        self.encoded_full_hashes = EncodedFullHashes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.encoded_updates = EncodedUpdates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.full_hashes = FullHashes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.threat_hits = ThreatHits(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.threat_list_updates = ThreatListUpdates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.threat_lists = ThreatLists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.threat_matches = ThreatMatches(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    