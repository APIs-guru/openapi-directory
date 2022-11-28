from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Interval:
    change: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change') }})
    change_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changePercent') }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    high: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('high') }})
    last: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    low: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low') }})
    open: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('open') }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
