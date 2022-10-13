from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Group:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    is_cluster: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCluster' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentName' }})
    
