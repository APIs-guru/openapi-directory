from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchMtuPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchMtuRequest:
    path_params: GetNetworkSwitchMtuPathParams = field()
    

@dataclass
class GetNetworkSwitchMtuResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_mtu_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
