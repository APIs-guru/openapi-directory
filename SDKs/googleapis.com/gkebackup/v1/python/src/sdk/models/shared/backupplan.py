from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backupconfig
from . import schedule
from . import retentionpolicy


@dataclass_json
@dataclass
class BackupPlan:
    backup_config: Optional[backupconfig.BackupConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupConfig' }})
    backup_schedule: Optional[schedule.Schedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupSchedule' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    deactivated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deactivated' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    protected_pod_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protectedPodCount' }})
    retention_policy: Optional[retentionpolicy.RetentionPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionPolicy' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
