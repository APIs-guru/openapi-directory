from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryLtdHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventoryLtdRequest:
    headers: PostInventoryLtdHeaders = field(default=None)
    

@dataclass
class PostInventoryLtdResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
