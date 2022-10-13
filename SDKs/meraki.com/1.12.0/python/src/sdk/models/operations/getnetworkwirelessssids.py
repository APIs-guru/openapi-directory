from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidsRequest:
    path_params: GetNetworkWirelessSsidsPathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessSsidsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_ssids_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
