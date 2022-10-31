from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingCompetitivePricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPricingCompetitivePricingRequest:
    headers: PostPricingCompetitivePricingHeaders = field(default=None)
    

@dataclass
class PostPricingCompetitivePricingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
