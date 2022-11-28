from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsAssignmentsResponse:
    content_type: str = field()
    status_code: int = field()
    assignment_mark_responses: Optional[List[shared.AssignmentMarkResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
