from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApproximateReportedProgress:
    r"""ApproximateReportedProgress
    A progress measurement of a WorkItem by a worker.
    """
    
    consumed_parallelism: Optional[ReportedParallelism] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumedParallelism') }})
    fraction_consumed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fractionConsumed') }})
    position: Optional[Position] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    remaining_parallelism: Optional[ReportedParallelism] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingParallelism') }})
    
