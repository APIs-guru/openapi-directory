from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class ContentRestriction:
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    restricting_user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictingUser' }})
    restriction_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictionTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
