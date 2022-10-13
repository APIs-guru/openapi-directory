from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGlobalJwtVerifierPathParams:
    verifier_id: str = field(default=None, metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGlobalJwtVerifierSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateGlobalJwtVerifierRequest:
    path_params: UpdateGlobalJwtVerifierPathParams = field(default=None)
    request: Optional[shared.GlobalJwtVerifier] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateGlobalJwtVerifierSecurity = field(default=None)
    

@dataclass
class UpdateGlobalJwtVerifierResponse:
    content_type: str = field(default=None)
    global_jwt_verifier: Optional[shared.GlobalJwtVerifier] = field(default=None)
    status_code: int = field(default=None)
    
