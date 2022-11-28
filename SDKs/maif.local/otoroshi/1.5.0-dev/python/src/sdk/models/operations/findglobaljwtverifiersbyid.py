from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindGlobalJwtVerifiersByIDPathParams:
    verifier_id: str = field(metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindGlobalJwtVerifiersByIDSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindGlobalJwtVerifiersByIDRequest:
    path_params: FindGlobalJwtVerifiersByIDPathParams = field()
    security: FindGlobalJwtVerifiersByIDSecurity = field()
    

@dataclass
class FindGlobalJwtVerifiersByIDResponse:
    content_type: str = field()
    status_code: int = field()
    global_jwt_verifier: Optional[shared.GlobalJwtVerifier] = field(default=None)
    
