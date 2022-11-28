from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryReorderPointHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryReorderPointRequest:
    headers: PostInventoryReorderPointHeaders = field()
    

@dataclass
class PostInventoryReorderPointResponse:
    content_type: str = field()
    status_code: int = field()
    
