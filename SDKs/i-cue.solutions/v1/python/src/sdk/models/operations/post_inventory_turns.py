from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryTurnsHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryTurnsRequest:
    headers: PostInventoryTurnsHeaders = field()
    

@dataclass
class PostInventoryTurnsResponse:
    content_type: str = field()
    status_code: int = field()
    
