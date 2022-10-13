from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkDevicesPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkDevicesRequest:
    path_params: GetNetworkDevicesPathParams = field(default=None)
    

@dataclass
class GetNetworkDevicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
