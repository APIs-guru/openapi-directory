from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import patchinstancefilter
from . import onetimeschedule
from . import patchconfig
from . import recurringschedule
from . import patchrollout

class PatchDeploymentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"


@dataclass_json
@dataclass
class PatchDeployment:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    instance_filter: Optional[patchinstancefilter.PatchInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceFilter' }})
    last_execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastExecuteTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    one_time_schedule: Optional[onetimeschedule.OneTimeSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oneTimeSchedule' }})
    patch_config: Optional[patchconfig.PatchConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patchConfig' }})
    recurring_schedule: Optional[recurringschedule.RecurringSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurringSchedule' }})
    rollout: Optional[patchrollout.PatchRollout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollout' }})
    state: Optional[PatchDeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
