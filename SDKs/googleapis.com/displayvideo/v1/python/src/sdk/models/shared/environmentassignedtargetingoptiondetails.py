from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    ENVIRONMENT_WEB_OPTIMIZED = "ENVIRONMENT_WEB_OPTIMIZED"
    ENVIRONMENT_WEB_NOT_OPTIMIZED = "ENVIRONMENT_WEB_NOT_OPTIMIZED"
    ENVIRONMENT_APP = "ENVIRONMENT_APP"


@dataclass_json
@dataclass
class EnvironmentAssignedTargetingOptionDetails:
    environment: Optional[EnvironmentAssignedTargetingOptionDetailsEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    
