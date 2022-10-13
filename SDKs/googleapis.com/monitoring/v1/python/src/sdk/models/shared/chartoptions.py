from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChartOptionsModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    COLOR = "COLOR"
    X_RAY = "X_RAY"
    STATS = "STATS"


@dataclass_json
@dataclass
class ChartOptions:
    mode: Optional[ChartOptionsModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    
