from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDGroupsPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOfferingsOfferingIDGroupsRequest:
    path_params: PostOfferingsOfferingIDGroupsPathParams = field()
    request: shared.AssessmentGroupRequired = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsOfferingIDGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    assessment_group_response: Optional[shared.AssessmentGroupResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
