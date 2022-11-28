from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DevicesQueryParams:
    os: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'os', 'style': 'form', 'explode': True }})
    

@dataclass
class DevicesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DevicesRequest:
    query_params: DevicesQueryParams = field()
    security: DevicesSecurity = field()
    

@dataclass
class DevicesResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied: Optional[Any] = field(default=None)
    os_devices: Optional[Any] = field(default=None)
    
