from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkSwitchAlternateManagementInterfacePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkSwitchAlternateManagementInterfaceRequest:
    path_params: GetNetworkSwitchAlternateManagementInterfacePathParams = field()
    

@dataclass
class GetNetworkSwitchAlternateManagementInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_switch_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
