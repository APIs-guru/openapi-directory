from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LocationTypeEnum(str, Enum):
    LOCATION_TYPE_UNSPECIFIED = "LOCATION_TYPE_UNSPECIFIED"
    ZONE = "ZONE"
    REGION = "REGION"


@dataclass_json
@dataclass
class Location:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recommended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommended' }})
    type: Optional[LocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
