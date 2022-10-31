from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryFillRateHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostInventoryFillRateRequest:
    headers: PostInventoryFillRateHeaders = field(default=None)
    

@dataclass
class PostInventoryFillRateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
