from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PatchDeploymentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"


@dataclass_json
@dataclass
class PatchDeploymentInput:
    r"""PatchDeploymentInput
    Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    instance_filter: Optional[PatchInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    one_time_schedule: Optional[OneTimeSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeSchedule') }})
    patch_config: Optional[PatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchConfig') }})
    recurring_schedule: Optional[RecurringScheduleInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringSchedule') }})
    rollout: Optional[PatchRollout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    

@dataclass_json
@dataclass
class PatchDeployment:
    r"""PatchDeployment
    Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    instance_filter: Optional[PatchInstanceFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    last_execute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExecuteTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    one_time_schedule: Optional[OneTimeSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeSchedule') }})
    patch_config: Optional[PatchConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchConfig') }})
    recurring_schedule: Optional[RecurringSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringSchedule') }})
    rollout: Optional[PatchRollout] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    state: Optional[PatchDeploymentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
