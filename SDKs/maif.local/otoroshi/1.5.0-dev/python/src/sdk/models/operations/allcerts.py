from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AllCertsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllCertsRequest:
    security: AllCertsSecurity = field(default=None)
    

@dataclass
class AllCertsResponse:
    certificates: Optional[List[shared.Certificate]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
