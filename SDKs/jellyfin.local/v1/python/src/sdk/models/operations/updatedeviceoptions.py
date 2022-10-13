from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateDeviceOptionsQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateDeviceOptionsRequests:
    device_options: Optional[shared.DeviceOptions] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    device_options1: Optional[shared.DeviceOptions] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    device_options2: Optional[shared.DeviceOptions] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateDeviceOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateDeviceOptionsRequest:
    query_params: UpdateDeviceOptionsQueryParams = field(default=None)
    request: UpdateDeviceOptionsRequests = field(default=None)
    security: UpdateDeviceOptionsSecurity = field(default=None)
    

@dataclass
class UpdateDeviceOptionsResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
