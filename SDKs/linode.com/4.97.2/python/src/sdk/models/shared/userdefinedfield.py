from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserDefinedField:
    default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    example: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'example' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    many_of: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manyOf' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    one_of: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneOf' }})
    
