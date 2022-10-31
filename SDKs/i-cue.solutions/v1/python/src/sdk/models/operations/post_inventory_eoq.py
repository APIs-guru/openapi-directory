from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryEoqHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryEoqRequest:
    headers: PostInventoryEoqHeaders = field(default=None)
    

@dataclass
class PostInventoryEoqResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
