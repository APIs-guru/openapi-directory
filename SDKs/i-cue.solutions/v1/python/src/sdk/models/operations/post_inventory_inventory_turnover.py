from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryInventoryTurnoverHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventoryInventoryTurnoverRequest:
    headers: PostInventoryInventoryTurnoverHeaders = field(default=None)
    

@dataclass
class PostInventoryInventoryTurnoverResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
