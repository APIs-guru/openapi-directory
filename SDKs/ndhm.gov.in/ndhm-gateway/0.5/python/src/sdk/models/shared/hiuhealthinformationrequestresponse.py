from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class HiuHealthInformationRequestResponseHiRequestSessionStatusEnum(str, Enum):
    REQUESTED = "REQUESTED"
    ACKNOWLEDGED = "ACKNOWLEDGED"


@dataclass_json
@dataclass
class HiuHealthInformationRequestResponseHiRequest:
    session_status: HiuHealthInformationRequestResponseHiRequestSessionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionStatus') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    

@dataclass_json
@dataclass
class HiuHealthInformationRequestResponse:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: RequestReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    hi_request: Optional[HiuHealthInformationRequestResponseHiRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiRequest') }})
    
