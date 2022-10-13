from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceAppliancePerformancePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceAppliancePerformanceRequest:
    path_params: GetDeviceAppliancePerformancePathParams = field(default=None)
    

@dataclass
class GetDeviceAppliancePerformanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_appliance_performance_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
