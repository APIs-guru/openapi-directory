from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryOptimalServiceLevelHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryOptimalServiceLevelRequest:
    headers: PostInventoryOptimalServiceLevelHeaders = field(default=None)
    

@dataclass
class PostInventoryOptimalServiceLevelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
