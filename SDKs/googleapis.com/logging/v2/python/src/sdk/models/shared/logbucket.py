from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cmeksettings
from . import indexconfig

class LogBucketLifecycleStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETE_REQUESTED = "DELETE_REQUESTED"


@dataclass_json
@dataclass
class LogBucket:
    cmek_settings: Optional[cmeksettings.CmekSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmekSettings' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    index_configs: Optional[List[indexconfig.IndexConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexConfigs' }})
    lifecycle_state: Optional[LogBucketLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycleState' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restricted_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedFields' }})
    retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionDays' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
