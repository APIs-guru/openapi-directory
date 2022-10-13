from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIUsageAggregatedOut:
    col_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colHeaders' }})
    data: Optional[List[List[int]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    history_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyTruncated' }})
    period_end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodEnd' }})
    period_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodStart' }})
    row_headers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowHeaders' }})
    time_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeUnit' }})
    total_usage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalUsage' }})
    
