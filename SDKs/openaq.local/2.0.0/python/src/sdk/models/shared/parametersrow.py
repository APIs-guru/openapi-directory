from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParametersRow:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_core: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCore' }})
    max_color_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxColorValue' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    preferred_unit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredUnit' }})
    
