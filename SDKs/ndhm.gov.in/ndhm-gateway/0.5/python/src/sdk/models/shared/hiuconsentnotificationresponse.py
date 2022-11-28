from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HiuConsentNotificationResponse:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: RequestReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    acknowledgement: Optional[List[ConsentAcknowledgement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgement') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
