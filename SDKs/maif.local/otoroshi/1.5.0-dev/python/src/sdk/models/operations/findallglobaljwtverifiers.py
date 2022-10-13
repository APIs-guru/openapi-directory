from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FindAllGlobalJwtVerifiersSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindAllGlobalJwtVerifiersRequest:
    security: FindAllGlobalJwtVerifiersSecurity = field(default=None)
    

@dataclass
class FindAllGlobalJwtVerifiersResponse:
    content_type: str = field(default=None)
    global_jwt_verifiers: Optional[List[shared.GlobalJwtVerifier]] = field(default=None)
    status_code: int = field(default=None)
    
