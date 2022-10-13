from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CsvVoice:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    call_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_id' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_name' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_name' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    status: Optional[shared.VoiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_description' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_price' }})
    
