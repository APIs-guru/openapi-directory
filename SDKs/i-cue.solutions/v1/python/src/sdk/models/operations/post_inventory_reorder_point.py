from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryReorderPointHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventoryReorderPointRequest:
    headers: PostInventoryReorderPointHeaders = field(default=None)
    

@dataclass
class PostInventoryReorderPointResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
