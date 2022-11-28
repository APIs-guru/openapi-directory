from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponsePathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseRequest:
    path_params: GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponsePathParams = field()
    

@dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseResponse:
    content_type: str = field()
    status_code: int = field()
    assignments: Optional[List[shared.Assignments]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
