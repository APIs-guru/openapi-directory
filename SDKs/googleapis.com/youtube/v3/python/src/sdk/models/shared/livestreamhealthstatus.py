from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import livestreamconfigurationissue

class LiveStreamHealthStatusStatusEnum(str, Enum):
    GOOD = "good"
    OK = "ok"
    BAD = "bad"
    NO_DATA = "noData"
    REVOKED = "revoked"


@dataclass_json
@dataclass
class LiveStreamHealthStatus:
    configuration_issues: Optional[List[livestreamconfigurationissue.LiveStreamConfigurationIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationIssues' }})
    last_update_time_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTimeSeconds' }})
    status: Optional[LiveStreamHealthStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
