from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CsvNi:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_id' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_name' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_received: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_received', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_name' }})
    network_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_type' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    ported: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ported' }})
    product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_type' }})
    reachable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reachable' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    response_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_code' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_price' }})
    valid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    
