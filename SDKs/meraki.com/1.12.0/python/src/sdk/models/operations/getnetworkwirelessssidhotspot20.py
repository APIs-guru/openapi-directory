from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidHotspot20PathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidHotspot20Request:
    path_params: GetNetworkWirelessSsidHotspot20PathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessSsidHotspot20Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_ssid_hotspot20_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
