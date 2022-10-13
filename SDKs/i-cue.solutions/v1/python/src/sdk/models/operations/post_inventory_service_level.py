from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryServiceLevelHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventoryServiceLevelRequest:
    headers: PostInventoryServiceLevelHeaders = field(default=None)
    

@dataclass
class PostInventoryServiceLevelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
