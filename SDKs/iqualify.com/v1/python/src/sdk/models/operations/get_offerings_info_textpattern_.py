from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsInfoTextPatternPathParams:
    text_pattern: str = field(metadata={'path_param': { 'field_name': 'textPattern', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsInfoTextPatternRequest:
    path_params: GetOfferingsInfoTextPatternPathParams = field()
    

@dataclass
class GetOfferingsInfoTextPatternResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    portfolio_activations: Optional[List[shared.PortfolioActivations]] = field(default=None)
    
