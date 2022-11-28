from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryFillRateHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryFillRateRequest:
    headers: PostInventoryFillRateHeaders = field()
    

@dataclass
class PostInventoryFillRateResponse:
    content_type: str = field()
    status_code: int = field()
    
