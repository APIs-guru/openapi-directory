from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryAmazonIpiHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryAmazonIpiRequest:
    headers: PostInventoryAmazonIpiHeaders = field()
    

@dataclass
class PostInventoryAmazonIpiResponse:
    content_type: str = field()
    status_code: int = field()
    
