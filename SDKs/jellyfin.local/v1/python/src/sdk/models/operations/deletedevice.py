from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteDeviceQueryParams:
    id: str = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteDeviceSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteDeviceRequest:
    query_params: DeleteDeviceQueryParams = field(default=None)
    security: DeleteDeviceSecurity = field(default=None)
    

@dataclass
class DeleteDeviceResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
