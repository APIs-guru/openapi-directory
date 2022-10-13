from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lkenodestatus

class LkeNodePoolDisksTypeEnum(str, Enum):
    RAW = "raw"
    EXT4 = "ext4"


@dataclass_json
@dataclass
class LkeNodePoolDisks:
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[LkeNodePoolDisksTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class LkeNodePool:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    disks: Optional[List[LkeNodePoolDisks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    nodes: Optional[List[lkenodestatus.LkeNodeStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
