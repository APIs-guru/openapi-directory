from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStackPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = field(default=None, metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStackRequest:
    path_params: GetNetworkSwitchStackPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchStackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_stack_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
