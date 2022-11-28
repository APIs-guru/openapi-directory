from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessAlternateManagementInterfacePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessAlternateManagementInterfaceRequest:
    path_params: GetNetworkWirelessAlternateManagementInterfacePathParams = field()
    

@dataclass
class GetNetworkWirelessAlternateManagementInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_wireless_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
