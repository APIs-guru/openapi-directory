from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PatientSmsNotifcationResponseStatusEnum(str, Enum):
    ACKNOWLEDGED = "ACKNOWLEDGED"
    ERRORED = "ERRORED"


@dataclass_json
@dataclass
class PatientSmsNotifcationResponse:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: RequestReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[PatientSmsNotifcationResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
