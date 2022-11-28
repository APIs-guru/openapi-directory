from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApproximateSplitRequest:
    r"""ApproximateSplitRequest
    A suggestion by the service to the worker to dynamically split the WorkItem.
    """
    
    fraction_consumed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fractionConsumed') }})
    fraction_of_remainder: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fractionOfRemainder') }})
    position: Optional[Position] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    
