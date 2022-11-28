from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardRequest:
    path_params: PostOfferingsOfferingIDUsersUserEmailBadgesAwardPathParams = field()
    

@dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardResponse:
    content_type: str = field()
    status_code: int = field()
    awarded_response: Optional[shared.AwardedResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
