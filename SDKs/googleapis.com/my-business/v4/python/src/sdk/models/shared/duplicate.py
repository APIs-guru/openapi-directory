from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DuplicateAccessEnum(str, Enum):
    ACCESS_UNSPECIFIED = "ACCESS_UNSPECIFIED"
    ACCESS_UNKNOWN = "ACCESS_UNKNOWN"
    ALLOWED = "ALLOWED"
    INSUFFICIENT = "INSUFFICIENT"


@dataclass_json
@dataclass
class Duplicate:
    access: Optional[DuplicateAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationName' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    
