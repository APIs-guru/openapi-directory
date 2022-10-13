from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionQueryParams:
    days: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'days', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionRequest:
    path_params: GetOfferingsOfferingIDLearnersPendingSubmissionPathParams = field(default=None)
    query_params: GetOfferingsOfferingIDLearnersPendingSubmissionQueryParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDLearnersPendingSubmissionResponse:
    assessment_pending_submissions: Optional[List[shared.AssessmentPendingSubmission]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
