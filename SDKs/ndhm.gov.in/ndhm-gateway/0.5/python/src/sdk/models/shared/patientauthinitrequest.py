from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatientAuthInitRequestQuery:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    purpose: PatientAuthPurposeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: PatientAuthRequester = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    auth_mode: Optional[AuthenticationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authMode') }})
    

@dataclass_json
@dataclass
class PatientAuthInitRequest:
    query: PatientAuthInitRequestQuery = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
