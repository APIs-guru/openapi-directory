from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userdefinedfield


@dataclass_json
@dataclass
class StackScript:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployments_active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments_active' }})
    deployments_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployments_total' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_public' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    mine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mine' }})
    rev_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rev_note' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_defined_fields: Optional[List[userdefinedfield.UserDefinedField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_defined_fields' }})
    user_gravatar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_gravatar_id' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
