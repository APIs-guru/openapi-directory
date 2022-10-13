from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingDecoyPricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostPricingDecoyPricingRequest:
    headers: PostPricingDecoyPricingHeaders = field(default=None)
    

@dataclass
class PostPricingDecoyPricingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
