from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDUsersPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetOfferingsOfferingIDUsersPathParams = field()
    query_params: GetOfferingsOfferingIDUsersQueryParams = field()
    

@dataclass
class GetOfferingsOfferingIDUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_user_responses: Optional[List[shared.OfferingUserResponse]] = field(default=None)
    
