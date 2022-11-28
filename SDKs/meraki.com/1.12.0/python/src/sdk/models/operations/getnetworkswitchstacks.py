from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStacksPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStacksRequest:
    path_params: GetNetworkSwitchStacksPathParams = field()
    

@dataclass
class GetNetworkSwitchStacksResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_stacks_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
