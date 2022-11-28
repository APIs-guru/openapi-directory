from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DoubleMatcher:
    r"""DoubleMatcher
    Specifies the way to match a double value.
    """
    
    exact: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    range: Optional[DoubleRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
