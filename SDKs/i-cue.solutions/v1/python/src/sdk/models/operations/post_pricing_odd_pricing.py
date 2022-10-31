from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingOddPricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPricingOddPricingRequest:
    headers: PostPricingOddPricingHeaders = field(default=None)
    

@dataclass
class PostPricingOddPricingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
