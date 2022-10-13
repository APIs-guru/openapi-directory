from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class CycleDeviceSwitchPortsPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CycleDeviceSwitchPortsRequestBody:
    ports: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    

@dataclass
class CycleDeviceSwitchPortsRequest:
    path_params: CycleDeviceSwitchPortsPathParams = field(default=None)
    request: CycleDeviceSwitchPortsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CycleDeviceSwitchPortsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    cycle_device_switch_ports_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
