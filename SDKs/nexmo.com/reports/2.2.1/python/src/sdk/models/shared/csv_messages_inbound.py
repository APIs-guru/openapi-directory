from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CsvMessagesInbound:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_received: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_received', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    message_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_body' }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_id' }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_price' }})
    
