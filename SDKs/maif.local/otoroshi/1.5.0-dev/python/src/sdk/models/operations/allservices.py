from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AllServicesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllServicesRequest:
    security: AllServicesSecurity = field()
    

@dataclass
class AllServicesResponse:
    content_type: str = field()
    status_code: int = field()
    services: Optional[List[shared.Service]] = field(default=None)
    
