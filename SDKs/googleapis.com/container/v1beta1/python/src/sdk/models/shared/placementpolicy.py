from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlacementPolicyTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    COMPACT = "COMPACT"


@dataclass_json
@dataclass
class PlacementPolicy:
    r"""PlacementPolicy
    PlacementPolicy defines the placement policy used by the node pool.
    """
    
    type: Optional[PlacementPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
