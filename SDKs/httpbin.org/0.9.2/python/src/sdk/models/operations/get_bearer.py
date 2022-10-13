from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBearerHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetBearerRequest:
    headers: GetBearerHeaders = field(default=None)
    

@dataclass
class GetBearerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
