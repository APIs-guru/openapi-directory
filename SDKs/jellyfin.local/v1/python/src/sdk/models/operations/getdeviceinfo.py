from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetDeviceInfoQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDeviceInfoRequest:
    query_params: GetDeviceInfoQueryParams = field(default=None)
    security: GetDeviceInfoSecurity = field(default=None)
    

@dataclass
class GetDeviceInfoResponse:
    content_type: str = field(default=None)
    device_info: Optional[shared.DeviceInfo] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
