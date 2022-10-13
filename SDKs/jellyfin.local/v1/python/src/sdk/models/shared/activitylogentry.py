from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loglevel_enum


@dataclass_json
@dataclass
class ActivityLogEntry:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Overview' }})
    severity: Optional[loglevel_enum.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severity' }})
    short_overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortOverview' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    user_primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPrimaryImageTag' }})
    
