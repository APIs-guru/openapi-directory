from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetParentalRatingsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetParentalRatingsRequest:
    security: GetParentalRatingsSecurity = field(default=None)
    

@dataclass
class GetParentalRatingsResponse:
    content_type: str = field(default=None)
    parental_ratings: Optional[List[shared.ParentalRating]] = field(default=None)
    status_code: int = field(default=None)
    
