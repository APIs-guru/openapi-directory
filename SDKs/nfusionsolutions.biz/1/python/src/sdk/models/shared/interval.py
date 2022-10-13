from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Interval:
    change: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'change' }})
    change_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changePercent' }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    high: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high' }})
    last: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    low: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'low' }})
    open: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
