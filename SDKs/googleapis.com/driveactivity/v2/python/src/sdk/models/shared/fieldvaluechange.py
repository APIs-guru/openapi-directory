from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fieldvalue
from . import fieldvalue


@dataclass_json
@dataclass
class FieldValueChange:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    new_value: Optional[fieldvalue.FieldValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newValue' }})
    old_value: Optional[fieldvalue.FieldValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldValue' }})
    
