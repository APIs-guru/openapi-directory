from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostInventoryCaryyingCostHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostInventoryCaryyingCostRequest:
    headers: PostInventoryCaryyingCostHeaders = field(default=None)
    

@dataclass
class PostInventoryCaryyingCostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
