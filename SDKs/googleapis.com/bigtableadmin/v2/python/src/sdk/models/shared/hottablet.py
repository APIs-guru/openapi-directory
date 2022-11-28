from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HotTablet:
    r"""HotTablet
    A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.
    """
    
    end_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endKey') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_cpu_usage_percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCpuUsagePercent') }})
    start_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startKey') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableName') }})
    
