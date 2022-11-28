from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBearerHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBearerRequest:
    headers: GetBearerHeaders = field()
    

@dataclass
class GetBearerResponse:
    content_type: str = field()
    status_code: int = field()
    
