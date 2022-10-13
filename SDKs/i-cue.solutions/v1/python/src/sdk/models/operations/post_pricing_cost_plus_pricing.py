from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingCostPlusPricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostPricingCostPlusPricingRequest:
    headers: PostPricingCostPlusPricingHeaders = field(default=None)
    

@dataclass
class PostPricingCostPlusPricingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
