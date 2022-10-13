from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Label:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    num_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numValue' }})
    str_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strValue' }})
    
