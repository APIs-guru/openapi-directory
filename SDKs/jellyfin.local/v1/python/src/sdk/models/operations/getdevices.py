from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDevicesQueryParams:
    supports_sync: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsSync', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDevicesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDevicesRequest:
    query_params: GetDevicesQueryParams = field(default=None)
    security: GetDevicesSecurity = field(default=None)
    

@dataclass
class GetDevicesResponse:
    content_type: str = field(default=None)
    device_info_query_result: Optional[shared.DeviceInfoQueryResult] = field(default=None)
    status_code: int = field(default=None)
    
