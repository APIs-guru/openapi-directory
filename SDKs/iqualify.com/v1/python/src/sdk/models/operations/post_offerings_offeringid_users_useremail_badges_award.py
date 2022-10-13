from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardRequest:
    path_params: PostOfferingsOfferingIDUsersUserEmailBadgesAwardPathParams = field(default=None)
    

@dataclass
class PostOfferingsOfferingIDUsersUserEmailBadgesAwardResponse:
    awarded_response: Optional[shared.AwardedResponse] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
