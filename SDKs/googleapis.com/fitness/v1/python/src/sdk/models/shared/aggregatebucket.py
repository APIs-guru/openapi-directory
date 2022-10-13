from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dataset
from . import session

class AggregateBucketTypeEnum(str, Enum):
    UNKNOWN = "unknown"
    TIME = "time"
    SESSION = "session"
    ACTIVITY_TYPE = "activityType"
    ACTIVITY_SEGMENT = "activitySegment"


@dataclass_json
@dataclass
class AggregateBucket:
    activity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    dataset: Optional[List[dataset.Dataset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataset' }})
    end_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeMillis' }})
    session: Optional[session.Session] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    start_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeMillis' }})
    type: Optional[AggregateBucketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
