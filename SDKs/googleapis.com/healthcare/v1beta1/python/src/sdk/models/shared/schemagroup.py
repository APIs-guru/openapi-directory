from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grouporsegment


@dataclass_json
@dataclass
class SchemaGroup:
    choice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'choice' }})
    max_occurs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxOccurs' }})
    members: Optional[List[grouporsegment.GroupOrSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    min_occurs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minOccurs' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
