from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryServiceLevelHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryServiceLevelRequest:
    headers: PostInventoryServiceLevelHeaders = field()
    

@dataclass
class PostInventoryServiceLevelResponse:
    content_type: str = field()
    status_code: int = field()
    
