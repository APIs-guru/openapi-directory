from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigPropertyRepresentation:
    default_value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'helpText' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
