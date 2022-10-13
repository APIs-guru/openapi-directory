from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CsvInAppVoice:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_id' }})
    client_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_ref' }})
    conversation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    leg_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'leg_id' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_price' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
