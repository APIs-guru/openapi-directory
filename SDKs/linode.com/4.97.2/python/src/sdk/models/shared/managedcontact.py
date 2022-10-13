from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ManagedContactPhone:
    primary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    secondary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondary' }})
    

@dataclass_json
@dataclass
class ManagedContact:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone: Optional[ManagedContactPhone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
