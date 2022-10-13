from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessSsidSchedulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = field(default=None, metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessSsidSchedulesRequest:
    path_params: GetNetworkWirelessSsidSchedulesPathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessSsidSchedulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_ssid_schedules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
