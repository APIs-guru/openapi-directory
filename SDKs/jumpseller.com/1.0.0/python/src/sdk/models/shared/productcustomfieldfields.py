from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductCustomFieldFields:
    custom_field_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field_id' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value_id' }})
    
