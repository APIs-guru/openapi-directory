from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PatientAuthModeQueryRequestQueryRequesterTypeEnum(str, Enum):
    HIP = "HIP"
    HIU = "HIU"


@dataclass_json
@dataclass
class PatientAuthModeQueryRequestQueryRequester:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: PatientAuthModeQueryRequestQueryRequesterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PatientAuthModeQueryRequestQuery:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    purpose: PatientAuthPurposeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: PatientAuthModeQueryRequestQueryRequester = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    

@dataclass_json
@dataclass
class PatientAuthModeQueryRequest:
    query: PatientAuthModeQueryRequestQuery = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
