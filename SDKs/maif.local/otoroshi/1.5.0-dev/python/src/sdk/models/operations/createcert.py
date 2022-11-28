from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCertSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCertRequest:
    security: CreateCertSecurity = field()
    request: Optional[shared.Certificate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCertResponse:
    content_type: str = field()
    status_code: int = field()
    certificate: Optional[shared.Certificate] = field(default=None)
    
