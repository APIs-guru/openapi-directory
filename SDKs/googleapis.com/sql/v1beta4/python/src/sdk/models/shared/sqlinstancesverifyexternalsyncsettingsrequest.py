from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum(str, Enum):
    EXTERNAL_SYNC_MODE_UNSPECIFIED = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"


@dataclass_json
@dataclass
class SQLInstancesVerifyExternalSyncSettingsRequest:
    mysql_sync_config: Optional[MySQLSyncConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlSyncConfig') }})
    sync_mode: Optional[SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncMode') }})
    verify_connection_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyConnectionOnly') }})
    verify_replication_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyReplicationOnly') }})
    
