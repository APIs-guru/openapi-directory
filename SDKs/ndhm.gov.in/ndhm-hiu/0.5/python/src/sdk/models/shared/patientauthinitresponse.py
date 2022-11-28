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
class PatientAuthInitResponseAuth:
    mode: AuthenticationModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    meta: Optional[AuthMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class PatientAuthInitResponse:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: RequestReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auth: Optional[PatientAuthInitResponseAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
