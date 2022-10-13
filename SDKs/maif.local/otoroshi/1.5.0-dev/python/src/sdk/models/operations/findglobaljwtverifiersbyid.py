from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindGlobalJwtVerifiersByIDPathParams:
    verifier_id: str = field(default=None, metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindGlobalJwtVerifiersByIDSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindGlobalJwtVerifiersByIDRequest:
    path_params: FindGlobalJwtVerifiersByIDPathParams = field(default=None)
    security: FindGlobalJwtVerifiersByIDSecurity = field(default=None)
    

@dataclass
class FindGlobalJwtVerifiersByIDResponse:
    content_type: str = field(default=None)
    global_jwt_verifier: Optional[shared.GlobalJwtVerifier] = field(default=None)
    status_code: int = field(default=None)
    
