from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchPortsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchPortsRequest:
    path_params: GetDeviceSwitchPortsPathParams = field()
    

@dataclass
class GetDeviceSwitchPortsResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_switch_ports_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
