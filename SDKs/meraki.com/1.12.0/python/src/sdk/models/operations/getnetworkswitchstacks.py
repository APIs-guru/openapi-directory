from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchStacksPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchStacksRequest:
    path_params: GetNetworkSwitchStacksPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchStacksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_stacks_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
