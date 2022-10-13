from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountSettingsObjectStorageEnum(str, Enum):
    DISABLED = "disabled"
    SUSPENDED = "suspended"
    ACTIVE = "active"


@dataclass_json
@dataclass
class AccountSettings:
    backups_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backups_enabled' }})
    longview_subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longview_subscription' }})
    managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managed' }})
    network_helper: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_helper' }})
    object_storage: Optional[AccountSettingsObjectStorageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object_storage' }})
    
