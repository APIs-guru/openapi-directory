from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HiphiRequestHiRequest:
    consent: Consent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consent') }})
    data_push_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataPushUrl') }})
    date_range: DateRange = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    key_material: KeyMaterial = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyMaterial') }})
    

@dataclass_json
@dataclass
class HiphiRequest:
    hi_request: HiphiRequestHiRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiRequest') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
