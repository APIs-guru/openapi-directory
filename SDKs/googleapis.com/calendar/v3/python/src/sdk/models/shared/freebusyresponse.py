from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import freebusycalendar
from . import freebusygroup


@dataclass_json
@dataclass
class FreeBusyResponse:
    calendars: Optional[dict[str, freebusycalendar.FreeBusyCalendar]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendars' }})
    groups: Optional[dict[str, freebusygroup.FreeBusyGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    time_max: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeMax', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_min: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeMin', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
