from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datapoint


@dataclass_json
@dataclass
class Dataset:
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    max_end_time_ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEndTimeNs' }})
    min_start_time_ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minStartTimeNs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    point: Optional[List[datapoint.DataPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'point' }})
    
