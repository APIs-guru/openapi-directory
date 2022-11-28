from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWorkerStatusSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWorkerStatusRequest:
    security: GetWorkerStatusSecurity = field()
    

@dataclass
class GetWorkerStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
