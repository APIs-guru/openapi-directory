from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryLtdHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryLtdRequest:
    headers: PostInventoryLtdHeaders = field()
    

@dataclass
class PostInventoryLtdResponse:
    content_type: str = field()
    status_code: int = field()
    
