from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateGlobalJwtVerifierSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateGlobalJwtVerifierRequest:
    request: Optional[shared.GlobalJwtVerifier] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateGlobalJwtVerifierSecurity = field(default=None)
    

@dataclass
class CreateGlobalJwtVerifierResponse:
    content_type: str = field(default=None)
    global_jwt_verifier: Optional[shared.GlobalJwtVerifier] = field(default=None)
    status_code: int = field(default=None)
    
