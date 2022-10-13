from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fixedorpercent

class PatchRolloutModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    ZONE_BY_ZONE = "ZONE_BY_ZONE"
    CONCURRENT_ZONES = "CONCURRENT_ZONES"


@dataclass_json
@dataclass
class PatchRollout:
    disruption_budget: Optional[fixedorpercent.FixedOrPercent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruptionBudget' }})
    mode: Optional[PatchRolloutModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
