from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailPathParams:
    assessment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody:
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequest:
    path_params: PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailPathParams = field(default=None)
    request: PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
