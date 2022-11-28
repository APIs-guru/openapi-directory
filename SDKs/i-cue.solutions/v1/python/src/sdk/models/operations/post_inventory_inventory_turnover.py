from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryInventoryTurnoverHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryInventoryTurnoverRequest:
    headers: PostInventoryInventoryTurnoverHeaders = field()
    

@dataclass
class PostInventoryInventoryTurnoverResponse:
    content_type: str = field()
    status_code: int = field()
    
