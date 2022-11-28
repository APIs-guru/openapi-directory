from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchPortPathParams:
    port_id: str = field(metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchPortRequest:
    path_params: GetDeviceSwitchPortPathParams = field()
    

@dataclass
class GetDeviceSwitchPortResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_switch_port_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
