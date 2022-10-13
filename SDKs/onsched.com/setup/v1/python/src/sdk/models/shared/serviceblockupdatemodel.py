from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import repeatupdatemodel


@dataclass_json
@dataclass
class ServiceBlockUpdateModel:
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    repeat: Optional[repeatupdatemodel.RepeatUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeat' }})
    repeats: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeats' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
