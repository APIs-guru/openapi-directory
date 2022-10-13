from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import freebusyrequestitem


@dataclass_json
@dataclass
class FreeBusyRequest:
    calendar_expansion_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarExpansionMax' }})
    group_expansion_max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupExpansionMax' }})
    items: Optional[List[freebusyrequestitem.FreeBusyRequestItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    time_max: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeMax', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_min: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeMin', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
