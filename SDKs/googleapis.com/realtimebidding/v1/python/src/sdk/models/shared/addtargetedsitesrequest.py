from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AddTargetedSitesRequestTargetingModeEnum(str, Enum):
    TARGETING_MODE_UNSPECIFIED = "TARGETING_MODE_UNSPECIFIED"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class AddTargetedSitesRequest:
    sites: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sites' }})
    targeting_mode: Optional[AddTargetedSitesRequestTargetingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingMode' }})
    
