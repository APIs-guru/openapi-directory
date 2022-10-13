from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HotTablet:
    end_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endKey' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_cpu_usage_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCpuUsagePercent' }})
    start_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startKey' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableName' }})
    
