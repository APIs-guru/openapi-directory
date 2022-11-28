from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PatientLinkReferenceResultLinkAuthenticationTypeEnum(str, Enum):
    DIRECT = "DIRECT"
    MEDIATED = "MEDIATED"


@dataclass_json
@dataclass
class PatientLinkReferenceResultLink:
    authentication_type: PatientLinkReferenceResultLinkAuthenticationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    reference_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    meta: Optional[Meta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class PatientLinkReferenceResult:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: RequestReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    link: Optional[PatientLinkReferenceResultLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
