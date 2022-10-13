from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponsePathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseRequest:
    path_params: GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponsePathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDUsersUserEmailSubmissionsOpenResponseResponse:
    assignments: Optional[List[shared.Assignments]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
