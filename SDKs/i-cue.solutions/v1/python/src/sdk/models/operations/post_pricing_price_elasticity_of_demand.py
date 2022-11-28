from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingPriceElasticityOfDemandHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPricingPriceElasticityOfDemandRequest:
    headers: PostPricingPriceElasticityOfDemandHeaders = field()
    

@dataclass
class PostPricingPriceElasticityOfDemandResponse:
    content_type: str = field()
    status_code: int = field()
    
