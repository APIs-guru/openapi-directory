from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2error
from . import googleprivacydlpv2inspectjobconfig
from . import googleprivacydlpv2trigger

class GooglePrivacyDlpV2JobTriggerStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    PAUSED = "PAUSED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2JobTrigger:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    errors: Optional[List[googleprivacydlpv2error.GooglePrivacyDlpV2Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    inspect_job: Optional[googleprivacydlpv2inspectjobconfig.GooglePrivacyDlpV2InspectJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inspectJob' }})
    last_run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRunTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[GooglePrivacyDlpV2JobTriggerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    triggers: Optional[List[googleprivacydlpv2trigger.GooglePrivacyDlpV2Trigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
