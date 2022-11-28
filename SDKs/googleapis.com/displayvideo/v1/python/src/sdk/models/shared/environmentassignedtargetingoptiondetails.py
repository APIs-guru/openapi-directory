from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    ENVIRONMENT_WEB_OPTIMIZED = "ENVIRONMENT_WEB_OPTIMIZED"
    ENVIRONMENT_WEB_NOT_OPTIMIZED = "ENVIRONMENT_WEB_NOT_OPTIMIZED"
    ENVIRONMENT_APP = "ENVIRONMENT_APP"


@dataclass_json
@dataclass
class EnvironmentAssignedTargetingOptionDetails:
    r"""EnvironmentAssignedTargetingOptionDetails
    Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
    """
    
    environment: Optional[EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
