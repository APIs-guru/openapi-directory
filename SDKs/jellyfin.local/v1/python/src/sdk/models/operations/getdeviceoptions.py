from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetDeviceOptionsQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDeviceOptionsRequest:
    query_params: GetDeviceOptionsQueryParams = field(default=None)
    security: GetDeviceOptionsSecurity = field(default=None)
    

@dataclass
class GetDeviceOptionsResponse:
    content_type: str = field(default=None)
    device_options: Optional[shared.DeviceOptions] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
