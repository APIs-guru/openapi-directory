from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nesteduser

class ObjectChangeActionLabelEnum(str, Enum):
    CREATED = "Created"
    UPDATED = "Updated"
    DELETED = "Deleted"

class ObjectChangeActionValueEnum(str, Enum):
    CREATE = "create"
    UPDATE = "update"
    DELETE = "delete"


@dataclass_json
@dataclass
class ObjectChangeActionAction:
    label: ObjectChangeActionLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: ObjectChangeActionValueEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ObjectChange:
    action: Optional[ObjectChangeActionAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    changed_object: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_object' }})
    changed_object_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_object_id' }})
    changed_object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_object_type' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    object_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object_data' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user: Optional[nesteduser.NestedUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_name' }})
    
