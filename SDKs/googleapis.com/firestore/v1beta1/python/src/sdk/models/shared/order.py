from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fieldreference

class OrderDirectionEnum(str, Enum):
    DIRECTION_UNSPECIFIED = "DIRECTION_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class Order:
    direction: Optional[OrderDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    field: Optional[fieldreference.FieldReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field' }})
    
