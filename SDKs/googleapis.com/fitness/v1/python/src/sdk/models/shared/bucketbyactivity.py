from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BucketByActivity:
    activity_data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityDataSourceId' }})
    min_duration_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minDurationMillis' }})
    
