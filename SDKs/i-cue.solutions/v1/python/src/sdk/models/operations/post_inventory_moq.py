from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryMoqHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventoryMoqRequest:
    headers: PostInventoryMoqHeaders = field(default=None)
    

@dataclass
class PostInventoryMoqResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
