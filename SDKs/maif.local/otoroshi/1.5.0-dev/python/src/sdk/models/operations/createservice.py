from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    security: CreateServiceSecurity = field()
    request: Optional[shared.Service] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateServiceResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
