from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryOptimalServiceLevelHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryOptimalServiceLevelRequest:
    headers: PostInventoryOptimalServiceLevelHeaders = field()
    

@dataclass
class PostInventoryOptimalServiceLevelResponse:
    content_type: str = field()
    status_code: int = field()
    
