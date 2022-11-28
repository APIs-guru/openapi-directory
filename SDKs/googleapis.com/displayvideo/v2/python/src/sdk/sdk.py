
__doc__ = """ SDK Documentation: https://developers.google.com/display-video/"""
import requests

from . import utils

from .advertisers import Advertisers
from .combinedaudiences import CombinedAudiences
from .custombiddingalgorithms import CustomBiddingAlgorithms
from .customlists import CustomLists
from .firstandthirdpartyaudiences import FirstAndThirdPartyAudiences
from .floodlightgroups import FloodlightGroups
from .googleaudiences import GoogleAudiences
from .guaranteedorders import GuaranteedOrders
from .inventorysourcegroups import InventorySourceGroups
from .inventorysources import InventorySources
from .media import Media
from .partners import Partners
from .sdfdownloadtasks import Sdfdownloadtasks
from .targetingtypes import TargetingTypes
from .users import Users


SERVERS = [
	"https://displayvideo.googleapis.com/",
]


class SDK:
    r"""SDK Documentation: https://developers.google.com/display-video/"""
    advertisers: Advertisers
    combined_audiences: CombinedAudiences
    custom_bidding_algorithms: CustomBiddingAlgorithms
    custom_lists: CustomLists
    first_and_third_party_audiences: FirstAndThirdPartyAudiences
    floodlight_groups: FloodlightGroups
    google_audiences: GoogleAudiences
    guaranteed_orders: GuaranteedOrders
    inventory_source_groups: InventorySourceGroups
    inventory_sources: InventorySources
    media: Media
    partners: Partners
    sdfdownloadtasks: Sdfdownloadtasks
    targeting_types: TargetingTypes
    users: Users

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
        
        self.advertisers = Advertisers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.combined_audiences = CombinedAudiences(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_bidding_algorithms = CustomBiddingAlgorithms(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_lists = CustomLists(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.first_and_third_party_audiences = FirstAndThirdPartyAudiences(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.floodlight_groups = FloodlightGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.google_audiences = GoogleAudiences(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.guaranteed_orders = GuaranteedOrders(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inventory_source_groups = InventorySourceGroups(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.inventory_sources = InventorySources(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.media = Media(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.partners = Partners(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sdfdownloadtasks = Sdfdownloadtasks(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.targeting_types = TargetingTypes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users = Users(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    