from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BackupPlanInput:
    r"""BackupPlanInput
    Defines the configuration and scheduling for a \"line\" of Backups.
    """
    
    backup_config: Optional[BackupConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupConfig') }})
    backup_schedule: Optional[Schedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupSchedule') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    deactivated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deactivated') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    retention_policy: Optional[RetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPolicy') }})
    

@dataclass_json
@dataclass
class BackupPlan:
    r"""BackupPlan
    Defines the configuration and scheduling for a \"line\" of Backups.
    """
    
    backup_config: Optional[BackupConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupConfig') }})
    backup_schedule: Optional[Schedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupSchedule') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    deactivated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deactivated') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protected_pod_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedPodCount') }})
    retention_policy: Optional[RetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionPolicy') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
