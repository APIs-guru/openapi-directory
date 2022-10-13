from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidEapOverridePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidEapOverrideRequest:
    path_params: GetNetworkWirelessSsidEapOverridePathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessSsidEapOverrideResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_ssid_eap_override_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
