from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDPathParams:
    assessment_id: str = field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    document_id: str = field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDRequest:
    path_params: DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDPathParams = field()
    

@dataclass
class DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
