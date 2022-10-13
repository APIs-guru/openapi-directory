from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDGroupsPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDGroupsRequest:
    path_params: GetOfferingsOfferingIDGroupsPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDGroupsResponse:
    assessment_group_responses: Optional[List[shared.AssessmentGroupResponse]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
