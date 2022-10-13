from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usageratetimelineentry


@dataclass_json
@dataclass
class UsageRateTimeline:
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    usage_rate_timeline_entries: Optional[List[usageratetimelineentry.UsageRateTimelineEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageRateTimelineEntries' }})
    
