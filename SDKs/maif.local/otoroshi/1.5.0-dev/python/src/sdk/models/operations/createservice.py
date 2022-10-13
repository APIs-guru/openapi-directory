from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    request: Optional[shared.Service] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateServiceSecurity = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    
