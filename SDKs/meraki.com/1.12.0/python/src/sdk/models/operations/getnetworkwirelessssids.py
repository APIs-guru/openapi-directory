from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidsPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidsRequest:
    path_params: GetNetworkWirelessSsidsPathParams = field()
    

@dataclass
class GetNetworkWirelessSsidsResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_ssids_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
