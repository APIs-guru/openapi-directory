from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDUsersPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOfferingsOfferingIDUsersRequest:
    path_params: PostOfferingsOfferingIDUsersPathParams = field()
    request: List[shared.OfferingUser] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsOfferingIDUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_user_add_responses: Optional[List[shared.OfferingUserAddResponse]] = field(default=None)
    post_offerings_offering_id_users_207_application_json_oneoves: Optional[List[Any]] = field(default=None)
    
