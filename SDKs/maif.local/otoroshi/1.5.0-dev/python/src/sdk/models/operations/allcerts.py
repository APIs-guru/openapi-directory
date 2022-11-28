from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AllCertsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllCertsRequest:
    security: AllCertsSecurity = field()
    

@dataclass
class AllCertsResponse:
    content_type: str = field()
    status_code: int = field()
    certificates: Optional[List[shared.Certificate]] = field(default=None)
    
