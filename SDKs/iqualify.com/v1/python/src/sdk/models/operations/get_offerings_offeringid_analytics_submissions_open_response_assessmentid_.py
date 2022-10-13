from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDRequest:
    path_params: GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDAnalyticsSubmissionsOpenResponseAssessmentIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    submission_mark_responses: Optional[List[Any]] = field(default=None)
    
