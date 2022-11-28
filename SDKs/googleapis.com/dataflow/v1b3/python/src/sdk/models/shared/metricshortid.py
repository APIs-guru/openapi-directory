from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricShortID:
    r"""MetricShortID
    The metric short id is returned to the user alongside an offset into ReportWorkItemStatusRequest
    """
    
    metric_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricIndex') }})
    short_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortId') }})
    
