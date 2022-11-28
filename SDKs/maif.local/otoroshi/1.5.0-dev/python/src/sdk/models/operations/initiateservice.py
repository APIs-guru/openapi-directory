from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class InitiateServiceRequest:
    security: InitiateServiceSecurity = field()
    

@dataclass
class InitiateServiceResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    
