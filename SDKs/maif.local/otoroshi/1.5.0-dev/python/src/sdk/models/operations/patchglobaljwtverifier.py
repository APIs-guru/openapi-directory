from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchGlobalJwtVerifierPathParams:
    verifier_id: str = field(default=None, metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchGlobalJwtVerifierSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchGlobalJwtVerifierRequest:
    path_params: PatchGlobalJwtVerifierPathParams = field(default=None)
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchGlobalJwtVerifierSecurity = field(default=None)
    

@dataclass
class PatchGlobalJwtVerifierResponse:
    content_type: str = field(default=None)
    global_jwt_verifier: Optional[shared.GlobalJwtVerifier] = field(default=None)
    status_code: int = field(default=None)
    
