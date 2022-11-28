from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsageRateTimelineEntry:
    r"""UsageRateTimelineEntry
    A usage rate timeline entry. Each entry specifies a constant usage rate during a time interval.
    """
    
    effective_time: Optional[EstimationTimePoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveTime') }})
    usage_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageRate') }})
    
