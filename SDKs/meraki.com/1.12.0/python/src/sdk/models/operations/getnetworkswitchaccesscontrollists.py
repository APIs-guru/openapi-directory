from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetNetworkSwitchAccessControlListsPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchAccessControlListsRequest:
    path_params: GetNetworkSwitchAccessControlListsPathParams = field(default=None)
    

@dataclass
class GetNetworkSwitchAccessControlListsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_switch_access_control_lists_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
