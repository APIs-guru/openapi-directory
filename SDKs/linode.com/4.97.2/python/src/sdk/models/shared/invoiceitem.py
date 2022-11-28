from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InvoiceItemTypeEnum(str, Enum):
    HOURLY = "hourly"
    MISC = "misc"


@dataclass_json
@dataclass
class InvoiceItem:
    r"""InvoiceItem
    An InvoiceItem object.
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    from_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax') }})
    to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    type: Optional[InvoiceItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    
