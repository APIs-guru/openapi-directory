from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricShortID:
    metric_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricIndex' }})
    short_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortId' }})
    
