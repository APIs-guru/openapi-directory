from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import consent
from . import daterange
from . import keymaterial


@dataclass_json
@dataclass
class HiphiRequestHiRequest:
    consent: consent.Consent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consent' }})
    data_push_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPushUrl' }})
    date_range: daterange.DateRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    key_material: keymaterial.KeyMaterial = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyMaterial' }})
    

@dataclass_json
@dataclass
class HiphiRequest:
    hi_request: HiphiRequestHiRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiRequest' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    
