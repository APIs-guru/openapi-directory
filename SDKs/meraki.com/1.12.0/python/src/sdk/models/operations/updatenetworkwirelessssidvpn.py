from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkWirelessSsidVpnPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum(str, Enum):
    ANY = "Any"
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules:
    dest_cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destCidr') }})
    policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destPort') }})
    protocol: Optional[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel:
    r"""UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel
    The VPN split tunnel settings for this SSID.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    rules: Optional[List[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidVpnRequestBody:
    split_tunnel: Optional[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('splitTunnel') }})
    

@dataclass
class UpdateNetworkWirelessSsidVpnRequest:
    path_params: UpdateNetworkWirelessSsidVpnPathParams = field()
    request: Optional[UpdateNetworkWirelessSsidVpnRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidVpnResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_wireless_ssid_vpn_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
