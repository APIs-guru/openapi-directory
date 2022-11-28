from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FloatingPointMean:
    r"""FloatingPointMean
    A representation of a floating point mean metric contribution.
    """
    
    count: Optional[SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
