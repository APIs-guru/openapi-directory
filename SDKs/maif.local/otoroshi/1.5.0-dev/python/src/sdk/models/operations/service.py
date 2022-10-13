from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceRequest:
    path_params: ServicePathParams = field(default=None)
    security: ServiceSecurity = field(default=None)
    

@dataclass
class ServiceResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    
