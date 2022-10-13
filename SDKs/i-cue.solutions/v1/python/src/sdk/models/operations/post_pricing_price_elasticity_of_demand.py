from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPricingPriceElasticityOfDemandHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostPricingPriceElasticityOfDemandRequest:
    headers: PostPricingPriceElasticityOfDemandHeaders = field(default=None)
    

@dataclass
class PostPricingPriceElasticityOfDemandResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
