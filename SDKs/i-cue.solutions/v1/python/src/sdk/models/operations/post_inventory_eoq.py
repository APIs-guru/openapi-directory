from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryEoqHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryEoqRequest:
    headers: PostInventoryEoqHeaders = field()
    

@dataclass
class PostInventoryEoqResponse:
    content_type: str = field()
    status_code: int = field()
    
