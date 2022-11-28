from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceSwitchWarmSparePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceSwitchWarmSpareRequest:
    path_params: GetDeviceSwitchWarmSparePathParams = field()
    

@dataclass
class GetDeviceSwitchWarmSpareResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_switch_warm_spare_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
