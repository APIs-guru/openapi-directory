from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventorySafetyStockHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventorySafetyStockRequest:
    headers: PostInventorySafetyStockHeaders = field(default=None)
    

@dataclass
class PostInventorySafetyStockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
