from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingPenetrationPricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPricingPenetrationPricingRequest:
    headers: PostPricingPenetrationPricingHeaders = field(default=None)
    

@dataclass
class PostPricingPenetrationPricingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
