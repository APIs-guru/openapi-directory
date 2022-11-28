from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnvironmentTargetingOptionDetailsEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    ENVIRONMENT_WEB_OPTIMIZED = "ENVIRONMENT_WEB_OPTIMIZED"
    ENVIRONMENT_WEB_NOT_OPTIMIZED = "ENVIRONMENT_WEB_NOT_OPTIMIZED"
    ENVIRONMENT_APP = "ENVIRONMENT_APP"


@dataclass_json
@dataclass
class EnvironmentTargetingOptionDetails:
    r"""EnvironmentTargetingOptionDetails
    Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.
    """
    
    environment: Optional[EnvironmentTargetingOptionDetailsEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    
