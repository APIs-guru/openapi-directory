from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCertSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCertRequest:
    request: Optional[shared.Certificate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCertSecurity = field(default=None)
    

@dataclass
class CreateCertResponse:
    certificate: Optional[shared.Certificate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
