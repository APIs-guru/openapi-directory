from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlacementPolicyTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    COMPACT = "COMPACT"


@dataclass_json
@dataclass
class PlacementPolicy:
    type: Optional[PlacementPolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
