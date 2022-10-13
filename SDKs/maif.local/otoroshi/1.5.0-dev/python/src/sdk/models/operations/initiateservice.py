from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateServiceSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class InitiateServiceRequest:
    security: InitiateServiceSecurity = field(default=None)
    

@dataclass
class InitiateServiceResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    
