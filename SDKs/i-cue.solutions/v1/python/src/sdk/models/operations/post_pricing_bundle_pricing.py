from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingBundlePricingHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPricingBundlePricingRequest:
    headers: PostPricingBundlePricingHeaders = field(default=None)
    

@dataclass
class PostPricingBundlePricingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
