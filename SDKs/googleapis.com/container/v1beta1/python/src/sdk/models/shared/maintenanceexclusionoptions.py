from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MaintenanceExclusionOptionsScopeEnum(str, Enum):
    NO_UPGRADES = "NO_UPGRADES"
    NO_MINOR_UPGRADES = "NO_MINOR_UPGRADES"
    NO_MINOR_OR_NODE_UPGRADES = "NO_MINOR_OR_NODE_UPGRADES"


@dataclass_json
@dataclass
class MaintenanceExclusionOptions:
    scope: Optional[MaintenanceExclusionOptionsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
