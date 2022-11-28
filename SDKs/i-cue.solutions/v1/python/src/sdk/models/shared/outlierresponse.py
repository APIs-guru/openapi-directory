from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OutlierResponseTypeEnum(str, Enum):
    ADDITIVE = "Additive"
    LEVEL_SHIFT = "LevelShift"
    TEMPORARY_CHANGE = "TemporaryChange"
    SEASONAL = "Seasonal"


@dataclass_json
@dataclass
class OutlierResponse:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    type: Optional[OutlierResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
