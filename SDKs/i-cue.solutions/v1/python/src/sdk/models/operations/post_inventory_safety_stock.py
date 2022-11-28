from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventorySafetyStockHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventorySafetyStockRequest:
    headers: PostInventorySafetyStockHeaders = field()
    

@dataclass
class PostInventorySafetyStockResponse:
    content_type: str = field()
    status_code: int = field()
    
