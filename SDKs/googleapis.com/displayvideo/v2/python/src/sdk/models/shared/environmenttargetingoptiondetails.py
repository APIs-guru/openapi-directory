from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnvironmentTargetingOptionDetailsEnvironmentEnum(str, Enum):
    ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED"
    ENVIRONMENT_WEB_OPTIMIZED = "ENVIRONMENT_WEB_OPTIMIZED"
    ENVIRONMENT_WEB_NOT_OPTIMIZED = "ENVIRONMENT_WEB_NOT_OPTIMIZED"
    ENVIRONMENT_APP = "ENVIRONMENT_APP"


@dataclass_json
@dataclass
class EnvironmentTargetingOptionDetails:
    environment: Optional[EnvironmentTargetingOptionDetailsEnvironmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    
