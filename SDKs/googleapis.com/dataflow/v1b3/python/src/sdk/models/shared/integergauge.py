from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntegerGauge:
    r"""IntegerGauge
    A metric value representing temporal values of a variable.
    """
    
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    value: Optional[SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
