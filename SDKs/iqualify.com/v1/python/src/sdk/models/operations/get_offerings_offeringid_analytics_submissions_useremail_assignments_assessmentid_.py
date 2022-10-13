from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDRequest:
    path_params: GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsUserEmailAssignmentsAssessmentIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    submission_mark_responses: Optional[List[Any]] = field(default=None)
    
