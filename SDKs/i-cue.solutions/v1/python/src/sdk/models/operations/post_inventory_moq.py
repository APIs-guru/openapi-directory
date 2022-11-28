from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryMoqHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryMoqRequest:
    headers: PostInventoryMoqHeaders = field()
    

@dataclass
class PostInventoryMoqResponse:
    content_type: str = field()
    status_code: int = field()
    
