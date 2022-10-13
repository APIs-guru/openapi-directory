from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import taskcompletionstatus_enum


@dataclass_json
@dataclass
class TaskResult:
    end_time_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTimeUtc', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    long_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongErrorMessage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    start_time_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimeUtc', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[taskcompletionstatus_enum.TaskCompletionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
