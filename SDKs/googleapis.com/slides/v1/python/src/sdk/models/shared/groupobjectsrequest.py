from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupObjectsRequest:
    children_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childrenObjectIds' }})
    group_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupObjectId' }})
    
