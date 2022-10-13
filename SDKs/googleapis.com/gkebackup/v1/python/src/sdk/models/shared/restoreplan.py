from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import restoreconfig


@dataclass_json
@dataclass
class RestorePlan:
    backup_plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupPlan' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restore_config: Optional[restoreconfig.RestoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreConfig' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
