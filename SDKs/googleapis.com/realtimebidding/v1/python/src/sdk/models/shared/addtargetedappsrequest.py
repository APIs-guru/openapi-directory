from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddTargetedAppsRequestTargetingModeEnum(str, Enum):
    TARGETING_MODE_UNSPECIFIED = "TARGETING_MODE_UNSPECIFIED"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class AddTargetedAppsRequest:
    r"""AddTargetedAppsRequest
    A request to start targeting the provided app IDs in a specific pretargeting configuration. The pretargeting configuration itself specifies how these apps are targeted. in PretargetingConfig.appTargeting.mobileAppTargeting.
    """
    
    app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIds') }})
    targeting_mode: Optional[AddTargetedAppsRequestTargetingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingMode') }})
    
