from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsInfoTextPatternPathParams:
    text_pattern: str = field(default=None, metadata={'path_param': { 'field_name': 'textPattern', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsInfoTextPatternRequest:
    path_params: GetOfferingsInfoTextPatternPathParams = field(default=None)
    

@dataclass
class GetOfferingsInfoTextPatternResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    portfolio_activations: Optional[List[shared.PortfolioActivations]] = field(default=None)
    status_code: int = field(default=None)
    
