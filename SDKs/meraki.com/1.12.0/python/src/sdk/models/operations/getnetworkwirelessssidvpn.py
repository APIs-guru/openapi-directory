from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidVpnPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidVpnRequest:
    path_params: GetNetworkWirelessSsidVpnPathParams = field()
    

@dataclass
class GetNetworkWirelessSsidVpnResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_ssid_vpn_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
