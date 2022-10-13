from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDeviceSwitchWarmSparePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceSwitchWarmSpareRequestBody:
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    spare_serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spareSerial' }})
    

@dataclass
class UpdateDeviceSwitchWarmSpareRequest:
    path_params: UpdateDeviceSwitchWarmSparePathParams = field(default=None)
    request: UpdateDeviceSwitchWarmSpareRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceSwitchWarmSpareResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_switch_warm_spare_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
