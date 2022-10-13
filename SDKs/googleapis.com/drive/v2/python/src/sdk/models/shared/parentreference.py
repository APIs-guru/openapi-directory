from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParentReference:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_root: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRoot' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    parent_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentLink' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
