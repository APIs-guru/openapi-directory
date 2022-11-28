from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BackupRetentionSettingsRetentionUnitEnum(str, Enum):
    RETENTION_UNIT_UNSPECIFIED = "RETENTION_UNIT_UNSPECIFIED"
    COUNT = "COUNT"


@dataclass_json
@dataclass
class BackupRetentionSettings:
    r"""BackupRetentionSettings
    We currently only support backup retention by specifying the number of backups we will retain.
    """
    
    retained_backups: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retainedBackups') }})
    retention_unit: Optional[BackupRetentionSettingsRetentionUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retentionUnit') }})
    
