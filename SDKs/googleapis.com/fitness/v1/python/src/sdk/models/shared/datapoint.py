from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import value


@dataclass_json
@dataclass
class DataPoint:
    computation_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computationTimeMillis' }})
    data_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataTypeName' }})
    end_time_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeNanos' }})
    modified_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedTimeMillis' }})
    origin_data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originDataSourceId' }})
    raw_timestamp_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawTimestampNanos' }})
    start_time_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeNanos' }})
    value: Optional[List[value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
