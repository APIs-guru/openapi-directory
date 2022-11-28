from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AggregateBucketTypeEnum(str, Enum):
    UNKNOWN = "unknown"
    TIME = "time"
    SESSION = "session"
    ACTIVITY_TYPE = "activityType"
    ACTIVITY_SEGMENT = "activitySegment"


@dataclass_json
@dataclass
class AggregateBucket:
    activity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    dataset: Optional[List[Dataset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataset') }})
    end_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeMillis') }})
    session: Optional[Session] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    start_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeMillis') }})
    type: Optional[AggregateBucketTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
