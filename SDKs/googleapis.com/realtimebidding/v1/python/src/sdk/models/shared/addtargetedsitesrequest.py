from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddTargetedSitesRequestTargetingModeEnum(str, Enum):
    TARGETING_MODE_UNSPECIFIED = "TARGETING_MODE_UNSPECIFIED"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class AddTargetedSitesRequest:
    r"""AddTargetedSitesRequest
    A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.
    """
    
    sites: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sites') }})
    targeting_mode: Optional[AddTargetedSitesRequestTargetingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingMode') }})
    
