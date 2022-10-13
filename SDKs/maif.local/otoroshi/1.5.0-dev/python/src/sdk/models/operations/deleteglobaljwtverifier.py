from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteGlobalJwtVerifierPathParams:
    verifier_id: str = field(default=None, metadata={'path_param': { 'field_name': 'verifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGlobalJwtVerifierSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteGlobalJwtVerifierRequest:
    path_params: DeleteGlobalJwtVerifierPathParams = field(default=None)
    security: DeleteGlobalJwtVerifierSecurity = field(default=None)
    

@dataclass
class DeleteGlobalJwtVerifierResponse:
    content_type: str = field(default=None)
    deleted: Optional[shared.Deleted] = field(default=None)
    status_code: int = field(default=None)
    
