from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomViewabilityMetricConfiguration:
    r"""CustomViewabilityMetricConfiguration
    The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
    """
    
    audible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audible') }})
    time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeMillis') }})
    time_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePercent') }})
    viewability_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewabilityPercent') }})
    
