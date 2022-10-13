from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import items


@dataclass_json
@dataclass
class LkeNodePoolRequestBody:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    disks: Optional[List[items.Items]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
