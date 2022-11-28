from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetDeviceInfoQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDeviceInfoRequest:
    query_params: GetDeviceInfoQueryParams = field()
    security: GetDeviceInfoSecurity = field()
    

@dataclass
class GetDeviceInfoResponse:
    content_type: str = field()
    status_code: int = field()
    device_info: Optional[shared.DeviceInfo] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
