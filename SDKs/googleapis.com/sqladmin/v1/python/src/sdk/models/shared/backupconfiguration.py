from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import backupretentionsettings


@dataclass_json
@dataclass
class BackupConfiguration:
    backup_retention_settings: Optional[backupretentionsettings.BackupRetentionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupRetentionSettings' }})
    binary_log_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryLogEnabled' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    point_in_time_recovery_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointInTimeRecoveryEnabled' }})
    replication_log_archiving_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicationLogArchivingEnabled' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    transaction_log_retention_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionLogRetentionDays' }})
    
