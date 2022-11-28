from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UsageRateTimeline:
    r"""UsageRateTimeline
    A timeline of usage rates. Consists of a series of entries, each of which specifies a constant rate of usage during a time interval. Each entry contains an effective time. The usage rate is in effect from that time until the effective time of the subsequent entry, or, for the last entry, for the remaining portion of estimation time frame. Effective times are specified as an offset into the estimation time frame. Usage is considered to be zero until the `effective_time` of the first entry. All subsequent entries must have an effective time greater than the previous entry and less than the estimate time frame. The effective time on all entries must be an integer number of hours.
    """
    
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    usage_rate_timeline_entries: Optional[List[UsageRateTimelineEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageRateTimelineEntries') }})
    
