from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OutlierResponseTypeEnum(str, Enum):
    ADDITIVE = "Additive"
    LEVEL_SHIFT = "LevelShift"
    TEMPORARY_CHANGE = "TemporaryChange"
    SEASONAL = "Seasonal"


@dataclass_json
@dataclass
class OutlierResponse:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    type: Optional[OutlierResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
