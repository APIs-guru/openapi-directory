from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDUsersPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    
class GetOfferingsOfferingIDUsersFacilitatorsEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class GetOfferingsOfferingIDUsersLearnersEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class GetOfferingsOfferingIDUsersMarkersEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"


@dataclass
class GetOfferingsOfferingIDUsersQueryParams:
    facilitators: Optional[GetOfferingsOfferingIDUsersFacilitatorsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'facilitators', 'style': 'form', 'explode': True }})
    learners: Optional[GetOfferingsOfferingIDUsersLearnersEnum] = field(default=None, metadata={'query_param': { 'field_name': 'learners', 'style': 'form', 'explode': True }})
    markers: Optional[GetOfferingsOfferingIDUsersMarkersEnum] = field(default=None, metadata={'query_param': { 'field_name': 'markers', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOfferingsOfferingIDUsersRequest:
    path_params: GetOfferingsOfferingIDUsersPathParams = field(default=None)
    query_params: GetOfferingsOfferingIDUsersQueryParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDUsersResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_user_responses: Optional[List[shared.OfferingUserResponse]] = field(default=None)
    status_code: int = field(default=None)
    
