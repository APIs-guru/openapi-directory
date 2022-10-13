from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChildLink:
    child_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childIndex' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    variable: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variable' }})
    
