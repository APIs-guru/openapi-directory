from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateServicePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceRequest:
    path_params: UpdateServicePathParams = field(default=None)
    request: Optional[shared.Service] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateServiceSecurity = field(default=None)
    

@dataclass
class UpdateServiceResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    
