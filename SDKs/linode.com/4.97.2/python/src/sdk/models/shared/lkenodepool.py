from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LkeNodePoolDisksTypeEnum(str, Enum):
    RAW = "raw"
    EXT4 = "ext4"


@dataclass_json
@dataclass
class LkeNodePoolDisks:
    r"""LkeNodePoolDisks
    The values to assign to each partition in this Node Pool's custom disk layout.
    
    """
    
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[LkeNodePoolDisksTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class LkeNodePool:
    r"""LkeNodePool
    The set of Node Pools which are members of the Kubernetes cluster. Node Pools consist of a Linode type, the number of Linodes to deploy of that type, and additional status information.
    
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    disks: Optional[List[LkeNodePoolDisks]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    nodes: Optional[List[LkeNodeStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
