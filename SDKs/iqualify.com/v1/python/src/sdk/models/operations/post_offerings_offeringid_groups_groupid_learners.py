from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDGroupsGroupIDLearnersPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostOfferingsOfferingIDGroupsGroupIDLearnersRequestBody:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    

@dataclass
class PostOfferingsOfferingIDGroupsGroupIDLearnersRequest:
    path_params: PostOfferingsOfferingIDGroupsGroupIDLearnersPathParams = field(default=None)
    request: PostOfferingsOfferingIDGroupsGroupIDLearnersRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsOfferingIDGroupsGroupIDLearnersResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    user_response: Optional[shared.UserResponse] = field(default=None)
    
