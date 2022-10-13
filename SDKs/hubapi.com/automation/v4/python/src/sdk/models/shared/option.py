from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Option:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_order: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayOrder' }})
    double_data: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleData' }})
    hidden: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hidden' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    read_only: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
