from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class WindowsUpdateSettingsClassificationsEnum(str, Enum):
    CLASSIFICATION_UNSPECIFIED = "CLASSIFICATION_UNSPECIFIED"
    CRITICAL = "CRITICAL"
    SECURITY = "SECURITY"
    DEFINITION = "DEFINITION"
    DRIVER = "DRIVER"
    FEATURE_PACK = "FEATURE_PACK"
    SERVICE_PACK = "SERVICE_PACK"
    TOOL = "TOOL"
    UPDATE_ROLLUP = "UPDATE_ROLLUP"
    UPDATE = "UPDATE"


@dataclass_json
@dataclass
class WindowsUpdateSettings:
    classifications: Optional[List[WindowsUpdateSettingsClassificationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classifications' }})
    excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    exclusive_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusivePatches' }})
    
