from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MaintenanceExclusionOptionsScopeEnum(str, Enum):
    NO_UPGRADES = "NO_UPGRADES"
    NO_MINOR_UPGRADES = "NO_MINOR_UPGRADES"
    NO_MINOR_OR_NODE_UPGRADES = "NO_MINOR_OR_NODE_UPGRADES"


@dataclass_json
@dataclass
class MaintenanceExclusionOptions:
    r"""MaintenanceExclusionOptions
    Represents the Maintenance exclusion option.
    """
    
    scope: Optional[MaintenanceExclusionOptionsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
