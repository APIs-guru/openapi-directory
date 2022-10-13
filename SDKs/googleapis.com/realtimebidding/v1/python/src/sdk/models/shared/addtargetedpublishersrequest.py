from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AddTargetedPublishersRequestTargetingModeEnum(str, Enum):
    TARGETING_MODE_UNSPECIFIED = "TARGETING_MODE_UNSPECIFIED"
    INCLUSIVE = "INCLUSIVE"
    EXCLUSIVE = "EXCLUSIVE"


@dataclass_json
@dataclass
class AddTargetedPublishersRequest:
    publisher_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherIds' }})
    targeting_mode: Optional[AddTargetedPublishersRequestTargetingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingMode' }})
    
