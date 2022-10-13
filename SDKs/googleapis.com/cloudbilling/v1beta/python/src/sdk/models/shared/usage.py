from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usageratetimeline


@dataclass_json
@dataclass
class Usage:
    usage_rate_timeline: Optional[usageratetimeline.UsageRateTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageRateTimeline' }})
    
