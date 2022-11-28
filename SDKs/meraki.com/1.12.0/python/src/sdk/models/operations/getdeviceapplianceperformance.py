from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceAppliancePerformancePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceAppliancePerformanceRequest:
    path_params: GetDeviceAppliancePerformancePathParams = field()
    

@dataclass
class GetDeviceAppliancePerformanceResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_appliance_performance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
