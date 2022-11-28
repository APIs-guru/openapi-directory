from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkDevicesPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkDevicesRequest:
    path_params: GetNetworkDevicesPathParams = field()
    

@dataclass
class GetNetworkDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_devices_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
