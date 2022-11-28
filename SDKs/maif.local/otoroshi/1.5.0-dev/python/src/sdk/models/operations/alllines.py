from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AllLinesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllLinesRequest:
    security: AllLinesSecurity = field()
    

@dataclass
class AllLinesResponse:
    content_type: str = field()
    status_code: int = field()
    environment: Optional[str] = field(default=None)
    
