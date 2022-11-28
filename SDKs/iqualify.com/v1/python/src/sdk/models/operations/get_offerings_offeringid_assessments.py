from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAssessmentsPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAssessmentsRequest:
    path_params: GetOfferingsOfferingIDAssessmentsPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAssessmentsResponse:
    content_type: str = field()
    status_code: int = field()
    assessment_responses: Optional[List[shared.AssessmentResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
