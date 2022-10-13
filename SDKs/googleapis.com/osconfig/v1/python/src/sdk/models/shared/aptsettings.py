from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AptSettingsTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DIST = "DIST"
    UPGRADE = "UPGRADE"


@dataclass_json
@dataclass
class AptSettings:
    excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    exclusive_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusivePackages' }})
    type: Optional[AptSettingsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
