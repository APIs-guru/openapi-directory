from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHealthSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetHealthRequest:
    security: GetHealthSecurity = field()
    

@dataclass
class GetHealthResponse:
    content_type: str = field()
    status_code: int = field()
    health: Optional[shared.Health] = field(default=None)
    
