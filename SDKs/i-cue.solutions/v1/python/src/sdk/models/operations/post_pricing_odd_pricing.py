from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingOddPricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPricingOddPricingRequest:
    headers: PostPricingOddPricingHeaders = field()
    

@dataclass
class PostPricingOddPricingResponse:
    content_type: str = field()
    status_code: int = field()
    
