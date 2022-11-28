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
class RestorePlanInput:
    r"""RestorePlanInput
    The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
    """
    
    backup_plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupPlan') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    restore_config: Optional[RestoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreConfig') }})
    

@dataclass_json
@dataclass
class RestorePlan:
    r"""RestorePlan
    The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
    """
    
    backup_plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupPlan') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restore_config: Optional[RestoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreConfig') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
