from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatientIdentificationRequestQueryPatient:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class PatientIdentificationRequestQueryRequesterTypeEnum(str, Enum):
    HIU = "HIU"
    HIP = "HIP"


@dataclass_json
@dataclass
class PatientIdentificationRequestQueryRequester:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[PatientIdentificationRequestQueryRequesterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PatientIdentificationRequestQuery:
    patient: PatientIdentificationRequestQueryPatient = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    requester: PatientIdentificationRequestQueryRequester = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    

@dataclass_json
@dataclass
class PatientIdentificationRequest:
    query: PatientIdentificationRequestQuery = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
