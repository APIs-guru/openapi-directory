from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateDeviceOptionsQueryParams:
    id: str = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateDeviceOptionsRequests:
    device_options: Optional[shared.DeviceOptions] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    device_options1: Optional[shared.DeviceOptions] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    device_options2: Optional[shared.DeviceOptions] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateDeviceOptionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateDeviceOptionsRequest:
    query_params: UpdateDeviceOptionsQueryParams = field()
    request: UpdateDeviceOptionsRequests = field()
    security: UpdateDeviceOptionsSecurity = field()
    

@dataclass
class UpdateDeviceOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
