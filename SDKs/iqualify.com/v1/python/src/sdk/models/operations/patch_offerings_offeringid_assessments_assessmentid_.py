from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDPathParams:
    assessment_id: str = field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDRequest:
    path_params: PatchOfferingsOfferingIDAssessmentsAssessmentIDPathParams = field()
    request: shared.Assessment = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDResponse:
    content_type: str = field()
    status_code: int = field()
    assessment_response: Optional[shared.AssessmentResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
