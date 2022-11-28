from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodePoolRepairActionEnum(str, Enum):
    REPAIR_ACTION_UNSPECIFIED = "REPAIR_ACTION_UNSPECIFIED"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class NodePool:
    r"""NodePool
    indicating a list of workers of same type
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    repair_action: Optional[NodePoolRepairActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repairAction') }})
    
