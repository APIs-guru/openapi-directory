from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PermissionAccessModeEnum(str, Enum):
    VIEW = "VIEW"
    STORE = "STORE"
    QUERY = "QUERY"
    STREAM = "STREAM"


@dataclass_json
@dataclass
class PermissionDateRange:
    from_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class PermissionFrequencyUnitEnum(str, Enum):
    HOUR = "HOUR"
    WEEK = "WEEK"
    DAY = "DAY"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclass
class PermissionFrequency:
    repeats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeats' }})
    unit: Optional[PermissionFrequencyUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class Permission:
    access_mode: PermissionAccessModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessMode' }})
    data_erase_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataEraseAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_range: PermissionDateRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    frequency: PermissionFrequency = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    
