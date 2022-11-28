from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
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
    services: List[UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    vlan_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlanId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingRequestBody:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    rules: Optional[List[UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingRequest:
    path_params: UpdateNetworkWirelessSsidBonjourForwardingPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidBonjourForwardingRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidBonjourForwardingResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_bonjour_forwarding_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
