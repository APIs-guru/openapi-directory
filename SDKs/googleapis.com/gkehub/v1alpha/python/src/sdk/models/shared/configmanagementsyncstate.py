from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configmanagementsyncerror

class ConfigManagementSyncStateCodeEnum(str, Enum):
    SYNC_CODE_UNSPECIFIED = "SYNC_CODE_UNSPECIFIED"
    SYNCED = "SYNCED"
    PENDING = "PENDING"
    ERROR = "ERROR"
    NOT_CONFIGURED = "NOT_CONFIGURED"
    NOT_INSTALLED = "NOT_INSTALLED"
    UNAUTHORIZED = "UNAUTHORIZED"
    UNREACHABLE = "UNREACHABLE"


@dataclass_json
@dataclass
class ConfigManagementSyncState:
    code: Optional[ConfigManagementSyncStateCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    errors: Optional[List[configmanagementsyncerror.ConfigManagementSyncError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    import_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importToken' }})
    last_sync: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSync' }})
    last_sync_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSyncTime' }})
    source_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceToken' }})
    sync_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncToken' }})
    
