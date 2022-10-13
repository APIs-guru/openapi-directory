from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsMarksAssignmentsPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDAnalyticsMarksAssignmentsResponse:
    assignment_mark_responses: Optional[List[shared.AssignmentMarkResponse]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
