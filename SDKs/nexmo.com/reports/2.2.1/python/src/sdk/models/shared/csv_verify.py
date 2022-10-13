from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CsvVerify:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_name' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_finalized: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_finalized', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_received: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_received', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    estimated_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_price' }})
    first_event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_event_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    last_event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_event_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_name' }})
    number_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_type' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    pricing_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_model' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    sms_event_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_event_count' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    tts_event_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tts_event_count' }})
    verify_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verify_status' }})
    
