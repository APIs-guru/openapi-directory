from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BackupRetentionSettingsRetentionUnitEnum(str, Enum):
    RETENTION_UNIT_UNSPECIFIED = "RETENTION_UNIT_UNSPECIFIED"
    COUNT = "COUNT"


@dataclass_json
@dataclass
class BackupRetentionSettings:
    retained_backups: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retainedBackups' }})
    retention_unit: Optional[BackupRetentionSettingsRetentionUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retentionUnit' }})
    
