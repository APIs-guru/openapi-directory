from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWirelessAlternateManagementInterfacePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWirelessAlternateManagementInterfaceRequest:
    path_params: GetNetworkWirelessAlternateManagementInterfacePathParams = field(default=None)
    

@dataclass
class GetNetworkWirelessAlternateManagementInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_wireless_alternate_management_interface_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
