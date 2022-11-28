from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Point:
    r"""Point
    A single data point in a time series.
    """
    
    interval: Optional[TimeInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interval') }})
    value: Optional[TypedValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
