from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HourlyMetrics:
    r"""HourlyMetrics
    Metrics for an hour.
    """
    
    hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hour') }})
    missed_calls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missedCallsCount') }})
    
