from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mysqlsyncconfig

class SQLInstancesStartExternalSyncRequestSyncModeEnum(str, Enum):
    EXTERNAL_SYNC_MODE_UNSPECIFIED = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclass
class SQLInstancesStartExternalSyncRequest:
    mysql_sync_config: Optional[mysqlsyncconfig.MySQLSyncConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlSyncConfig' }})
    skip_verification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipVerification' }})
    sync_mode: Optional[SQLInstancesStartExternalSyncRequestSyncModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncMode' }})
    
