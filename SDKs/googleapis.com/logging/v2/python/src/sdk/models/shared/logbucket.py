from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LogBucketLifecycleStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETE_REQUESTED = "DELETE_REQUESTED"


@dataclass_json
@dataclass
class LogBucket:
    r"""LogBucket
    Describes a repository in which log entries are stored.
    """
    
    cmek_settings: Optional[CmekSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmekSettings') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    index_configs: Optional[List[IndexConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexConfigs') }})
    lifecycle_state: Optional[LogBucketLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleState') }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restricted_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedFields') }})
    retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionDays') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class LogBucketInput:
    r"""LogBucketInput
    Describes a repository in which log entries are stored.
    """
    
    cmek_settings: Optional[CmekSettingsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmekSettings') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    index_configs: Optional[List[IndexConfigInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexConfigs') }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    restricted_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedFields') }})
    retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionDays') }})
    
