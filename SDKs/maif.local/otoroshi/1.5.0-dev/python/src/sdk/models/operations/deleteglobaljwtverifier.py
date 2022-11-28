from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteGlobalJwtVerifierPathParams:
    verifier_id: str = field(metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGlobalJwtVerifierSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteGlobalJwtVerifierRequest:
    path_params: DeleteGlobalJwtVerifierPathParams = field()
    security: DeleteGlobalJwtVerifierSecurity = field()
    

@dataclass
class DeleteGlobalJwtVerifierResponse:
    content_type: str = field()
    status_code: int = field()
    deleted: Optional[shared.Deleted] = field(default=None)
    
