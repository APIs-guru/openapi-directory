from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServicePathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceRequest:
    path_params: ServicePathParams = field()
    security: ServiceSecurity = field()
    

@dataclass
class ServiceResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
