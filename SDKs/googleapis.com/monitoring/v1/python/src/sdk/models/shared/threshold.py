from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ThresholdColorEnum(str, Enum):
    COLOR_UNSPECIFIED = "COLOR_UNSPECIFIED"
    YELLOW = "YELLOW"
    RED = "RED"

class ThresholdDirectionEnum(str, Enum):
    DIRECTION_UNSPECIFIED = "DIRECTION_UNSPECIFIED"
    ABOVE = "ABOVE"
    BELOW = "BELOW"

class ThresholdTargetAxisEnum(str, Enum):
    TARGET_AXIS_UNSPECIFIED = "TARGET_AXIS_UNSPECIFIED"
    Y1 = "Y1"
    Y2 = "Y2"


@dataclass_json
@dataclass
class Threshold:
    r"""Threshold
    Defines a threshold for categorizing time series values.
    """
    
    color: Optional[ThresholdColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    direction: Optional[ThresholdDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    target_axis: Optional[ThresholdTargetAxisEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAxis') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
