from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Bin:
    r"""Bin
    A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, \"first contentful paint\" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, \"cumulative layout shift\" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.
    """
    
    density: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('density') }})
    end: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
