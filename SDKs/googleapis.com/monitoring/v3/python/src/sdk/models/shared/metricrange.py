from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricRange:
    r"""MetricRange
    A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.
    """
    
    range: Optional[GoogleMonitoringV3Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    time_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSeries') }})
    
