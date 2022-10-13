from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryTurnsHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventoryTurnsRequest:
    headers: PostInventoryTurnsHeaders = field(default=None)
    

@dataclass
class PostInventoryTurnsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
