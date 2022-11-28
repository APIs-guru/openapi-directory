from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FindAllGlobalJwtVerifiersSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindAllGlobalJwtVerifiersRequest:
    security: FindAllGlobalJwtVerifiersSecurity = field()
    

@dataclass
class FindAllGlobalJwtVerifiersResponse:
    content_type: str = field()
    status_code: int = field()
    global_jwt_verifiers: Optional[List[shared.GlobalJwtVerifier]] = field(default=None)
    
