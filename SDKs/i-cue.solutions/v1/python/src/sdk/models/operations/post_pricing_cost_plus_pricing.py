from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingCostPlusPricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPricingCostPlusPricingRequest:
    headers: PostPricingCostPlusPricingHeaders = field()
    

@dataclass
class PostPricingCostPlusPricingResponse:
    content_type: str = field()
    status_code: int = field()
    
