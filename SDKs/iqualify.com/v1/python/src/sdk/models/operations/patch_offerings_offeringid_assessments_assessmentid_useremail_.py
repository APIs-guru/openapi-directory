from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailPathParams:
    assessment_id: str = field(metadata={'path_param': { 'field_name': 'assessmentId', 'style': 'simple', 'explode': False }})
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody:
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequest:
    path_params: PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailPathParams = field()
    request: PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchOfferingsOfferingIDAssessmentsAssessmentIDUserEmailResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
