from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    IN = "IN"
    OUT = "OUT"
    INOUT = "INOUT"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1RoutineSpecArgument:
    mode: Optional[GoogleCloudDatacatalogV1RoutineSpecArgumentModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
