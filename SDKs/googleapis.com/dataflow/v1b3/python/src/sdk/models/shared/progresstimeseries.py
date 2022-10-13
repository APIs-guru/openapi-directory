from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import point


@dataclass_json
@dataclass
class ProgressTimeseries:
    current_progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentProgress' }})
    data_points: Optional[List[point.Point]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataPoints' }})
    
