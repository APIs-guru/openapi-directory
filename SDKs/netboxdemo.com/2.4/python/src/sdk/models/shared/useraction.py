from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import nesteduser


@dataclass_json
@dataclass
class UserActionActionAction:
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class UserAction:
    action: UserActionActionAction = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user: nesteduser.NestedUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
