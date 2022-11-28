from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsMarksAssignmentsPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsResponse:
    content_type: str = field()
    status_code: int = field()
    assignment_mark_responses: Optional[List[shared.AssignmentMarkResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
