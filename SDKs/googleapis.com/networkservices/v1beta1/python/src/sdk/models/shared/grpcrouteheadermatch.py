from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GrpcRouteHeaderMatchTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EXACT = "EXACT"
    REGULAR_EXPRESSION = "REGULAR_EXPRESSION"


@dataclass_json
@dataclass
class GrpcRouteHeaderMatch:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    type: Optional[GrpcRouteHeaderMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
