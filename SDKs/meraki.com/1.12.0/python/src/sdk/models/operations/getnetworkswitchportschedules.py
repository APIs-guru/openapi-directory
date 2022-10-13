from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchPortSchedulesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchPortSchedulesRequest:
    path_params: GetNetworkSwitchPortSchedulesPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchPortSchedulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_port_schedules_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
