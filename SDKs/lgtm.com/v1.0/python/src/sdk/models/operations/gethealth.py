from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHealthSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetHealthRequest:
    security: GetHealthSecurity = field(default=None)
    

@dataclass
class GetHealthResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    health: Optional[shared.Health] = field(default=None)
    
