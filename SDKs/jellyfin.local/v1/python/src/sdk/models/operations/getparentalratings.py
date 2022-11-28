from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetParentalRatingsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetParentalRatingsRequest:
    security: GetParentalRatingsSecurity = field()
    

@dataclass
class GetParentalRatingsResponse:
    content_type: str = field()
    status_code: int = field()
    parental_ratings: Optional[List[shared.ParentalRating]] = field(default=None)
    
