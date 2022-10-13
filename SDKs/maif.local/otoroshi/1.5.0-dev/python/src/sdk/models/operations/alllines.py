from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AllLinesSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class AllLinesRequest:
    security: AllLinesSecurity = field(default=None)
    

@dataclass
class AllLinesResponse:
    content_type: str = field(default=None)
    environment: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
