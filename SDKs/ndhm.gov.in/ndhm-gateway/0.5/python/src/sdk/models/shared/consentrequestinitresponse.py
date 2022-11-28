from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsentRequestInitResponseConsentRequest:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class ConsentRequestInitResponse:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: RequestReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consent_request: Optional[ConsentRequestInitResponseConsentRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentRequest') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
