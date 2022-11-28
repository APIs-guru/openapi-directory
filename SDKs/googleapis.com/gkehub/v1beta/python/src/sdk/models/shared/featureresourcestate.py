from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FeatureResourceStateStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLING = "ENABLING"
    ACTIVE = "ACTIVE"
    DISABLING = "DISABLING"
    UPDATING = "UPDATING"
    SERVICE_UPDATING = "SERVICE_UPDATING"


@dataclass_json
@dataclass
class FeatureResourceState:
    r"""FeatureResourceState
    FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the \"running state\" of the Feature in the Hub and across Memberships.
    """
    
    state: Optional[FeatureResourceStateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
