from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OrdersData:
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('average') }})
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    paid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paid') }})
    pending: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
