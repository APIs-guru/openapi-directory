from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStormControlPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStormControlRequest:
    path_params: GetNetworkSwitchStormControlPathParams = field()
    

@dataclass
class GetNetworkSwitchStormControlResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_storm_control_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
