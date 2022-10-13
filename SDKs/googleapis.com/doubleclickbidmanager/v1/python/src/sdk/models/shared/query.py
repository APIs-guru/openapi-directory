from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import querymetadata
from . import parameters
from . import queryschedule


@dataclass_json
@dataclass
class Query:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metadata: Optional[querymetadata.QueryMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    params: Optional[parameters.Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryId' }})
    report_data_end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDataEndTimeMs' }})
    report_data_start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportDataStartTimeMs' }})
    schedule: Optional[queryschedule.QuerySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    timezone_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneCode' }})
    
