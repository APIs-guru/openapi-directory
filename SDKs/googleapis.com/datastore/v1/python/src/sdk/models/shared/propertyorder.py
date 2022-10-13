from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import propertyreference

class PropertyOrderDirectionEnum(str, Enum):
    DIRECTION_UNSPECIFIED = "DIRECTION_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class PropertyOrder:
    direction: Optional[PropertyOrderDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    property: Optional[propertyreference.PropertyReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    
