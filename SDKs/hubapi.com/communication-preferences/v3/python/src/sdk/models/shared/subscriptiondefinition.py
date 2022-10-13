from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscriptionDefinition:
    communication_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communicationMethod' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    is_default: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    is_internal: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isInternal' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    purpose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
