from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AddTargetedAppsRequestTargetingModeEnum(str, Enum):
    TARGETING_MODE_UNSPECIFIED = "TARGETING_MODE_UNSPECIFIED"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class AddTargetedAppsRequest:
    app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appIds' }})
    targeting_mode: Optional[AddTargetedAppsRequestTargetingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingMode' }})
    
