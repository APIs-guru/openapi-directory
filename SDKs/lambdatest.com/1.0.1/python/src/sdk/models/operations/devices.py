from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DevicesQueryParams:
    os: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'os', 'style': 'form', 'explode': True }})
    

@dataclass
class DevicesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DevicesRequest:
    query_params: DevicesQueryParams = field(default=None)
    security: DevicesSecurity = field(default=None)
    

@dataclass
class DevicesResponse:
    access_denied: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    os_devices: Optional[Any] = field(default=None)
    
