from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWirelessSsidVpnPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum(str, Enum):
    ANY = "Any"
    TCP = "TCP"
    UDP = "UDP"


@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    dest_cidr: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destCidr' }})
    dest_port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destPort' }})
    policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    protocol: Optional[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    rules: Optional[List[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    

@dataclass_json
@dataclass
class UpdateNetworkWirelessSsidVpnRequestBody:
    split_tunnel: Optional[UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'splitTunnel' }})
    

@dataclass
class UpdateNetworkWirelessSsidVpnRequest:
    path_params: UpdateNetworkWirelessSsidVpnPathParams = field(default=None)
    request: Optional[UpdateNetworkWirelessSsidVpnRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWirelessSsidVpnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_wireless_ssid_vpn_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
