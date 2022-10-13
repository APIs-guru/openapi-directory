from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class JSONSmsOutboundWithBody:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    client_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_ref' }})
    concatenated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concatenated' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_name' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_finalized: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_finalized', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_received: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_received', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    error_code_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code_description' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latency' }})
    message_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_body' }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_id' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_name' }})
    status: Optional[shared.SmsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_price' }})
    
