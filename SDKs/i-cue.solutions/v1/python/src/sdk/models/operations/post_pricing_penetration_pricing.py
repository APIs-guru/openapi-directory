from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingPenetrationPricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPricingPenetrationPricingRequest:
    headers: PostPricingPenetrationPricingHeaders = field()
    

@dataclass
class PostPricingPenetrationPricingResponse:
    content_type: str = field()
    status_code: int = field()
    
