from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStackPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStackRequest:
    path_params: GetNetworkSwitchStackPathParams = field()
    

@dataclass
class GetNetworkSwitchStackResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_stack_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
