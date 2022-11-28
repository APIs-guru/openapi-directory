from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateGlobalJwtVerifierSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateGlobalJwtVerifierRequest:
    security: CreateGlobalJwtVerifierSecurity = field()
    request: Optional[shared.GlobalJwtVerifier] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGlobalJwtVerifierResponse:
    content_type: str = field()
    status_code: int = field()
    global_jwt_verifier: Optional[shared.GlobalJwtVerifier] = field(default=None)
    
