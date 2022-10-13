from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RewindTimeSeriesResponse:
    customer_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerError' }})
    error_diff: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDiff' }})
    icue_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icueError' }})
    time_series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeSeries' }})
    total_cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCost' }})
    use_icue: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useIcue' }})
    
