from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mysqlsyncconfig

class SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum(str, Enum):
    EXTERNAL_SYNC_MODE_UNSPECIFIED = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclass
class SQLInstancesVerifyExternalSyncSettingsRequest:
    mysql_sync_config: Optional[mysqlsyncconfig.MySQLSyncConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlSyncConfig' }})
    sync_mode: Optional[SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncMode' }})
    verify_connection_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyConnectionOnly' }})
    verify_replication_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifyReplicationOnly' }})
    
