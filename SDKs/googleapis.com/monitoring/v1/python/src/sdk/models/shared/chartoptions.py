from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChartOptionsModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    COLOR = "COLOR"
    X_RAY = "X_RAY"
    STATS = "STATS"


@dataclass_json
@dataclass
class ChartOptions:
    r"""ChartOptions
    Options to control visual rendering of a chart.
    """
    
    mode: Optional[ChartOptionsModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
