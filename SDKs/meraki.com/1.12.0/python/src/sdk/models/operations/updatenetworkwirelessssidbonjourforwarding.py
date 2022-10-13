from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum(str, Enum):
    ALL_SERVICES = "All Services"
    AIR_PLAY = "AirPlay"
    AFP = "AFP"
    BIT_TORRENT = "BitTorrent"
    FTP = "FTP"
    I_CHAT = "iChat"
    I_TUNES = "iTunes"
    PRINTERS = "Printers"
    SAMBA = "Samba"
    SCANNERS = "Scanners"
    SSH = "SSH"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    services: List[UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    vlan_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlanId' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    rules: Optional[List[UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingRequest:
    path_params: UpdateNetworkWirelessSsidBonjourForwardingPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidBonjourForwardingRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_bonjour_forwarding_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
