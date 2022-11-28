from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApproximateProgress:
    r"""ApproximateProgress
    Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
    """
    
    percent_complete: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentComplete') }})
    position: Optional[Position] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    remaining_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingTime') }})
    
