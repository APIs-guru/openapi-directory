from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOfferingsOfferingIDGroupsPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostOfferingsOfferingIDGroupsRequest:
    path_params: PostOfferingsOfferingIDGroupsPathParams = field(default=None)
    request: shared.AssessmentGroupRequired = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsOfferingIDGroupsResponse:
    assessment_group_response: Optional[shared.AssessmentGroupResponse] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
