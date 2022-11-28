from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionQueryParams:
    days: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'days', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionRequest:
    path_params: GetOfferingsOfferingIDLearnersPendingSubmissionPathParams = field()
    query_params: GetOfferingsOfferingIDLearnersPendingSubmissionQueryParams = field()
    

@dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionResponse:
    content_type: str = field()
    status_code: int = field()
    assessment_pending_submissions: Optional[List[shared.AssessmentPendingSubmission]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
