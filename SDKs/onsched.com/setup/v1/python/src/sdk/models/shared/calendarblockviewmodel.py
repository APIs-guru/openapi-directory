from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import repeatviewmodel


@dataclass_json
@dataclass
class CalendarBlockViewModel:
    calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarId' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    repeat: Optional[repeatviewmodel.RepeatViewModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeat' }})
    repeats: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeats' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
