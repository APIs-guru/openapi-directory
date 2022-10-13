from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InvoiceItemTypeEnum(str, Enum):
    HOURLY = "hourly"
    MISC = "misc"


@dataclass_json
@dataclass
class InvoiceItem:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    from_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    type: Optional[InvoiceItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_price' }})
    
