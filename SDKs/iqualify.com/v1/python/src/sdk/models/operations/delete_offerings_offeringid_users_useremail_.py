from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteOfferingsOfferingIDUsersUserEmailPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOfferingsOfferingIDUsersUserEmailRequest:
    path_params: DeleteOfferingsOfferingIDUsersUserEmailPathParams = field()
    

@dataclass
class DeleteOfferingsOfferingIDUsersUserEmailResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
