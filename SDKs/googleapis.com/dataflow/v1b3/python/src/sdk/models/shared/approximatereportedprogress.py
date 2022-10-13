from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reportedparallelism
from . import position
from . import reportedparallelism


@dataclass_json
@dataclass
class ApproximateReportedProgress:
    consumed_parallelism: Optional[reportedparallelism.ReportedParallelism] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumedParallelism' }})
    fraction_consumed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fractionConsumed' }})
    position: Optional[position.Position] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    remaining_parallelism: Optional[reportedparallelism.ReportedParallelism] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingParallelism' }})
    
