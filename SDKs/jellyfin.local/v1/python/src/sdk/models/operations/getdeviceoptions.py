from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetDeviceOptionsQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDeviceOptionsRequest:
    query_params: GetDeviceOptionsQueryParams = field()
    security: GetDeviceOptionsSecurity = field()
    

@dataclass
class GetDeviceOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    device_options: Optional[shared.DeviceOptions] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
