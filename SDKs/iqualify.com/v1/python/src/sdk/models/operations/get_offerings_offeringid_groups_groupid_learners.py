from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDGroupsGroupIDLearnersPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDGroupsGroupIDLearnersRequest:
    path_params: GetOfferingsOfferingIDGroupsGroupIDLearnersPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDGroupsGroupIDLearnersResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    user_responses: Optional[List[shared.UserResponse]] = field(default=None)
    
