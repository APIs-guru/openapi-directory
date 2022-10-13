from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notificationlevel_enum


@dataclass_json
@dataclass
class NotificationDto:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsRead' }})
    level: Optional[notificationlevel_enum.NotificationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Level' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
