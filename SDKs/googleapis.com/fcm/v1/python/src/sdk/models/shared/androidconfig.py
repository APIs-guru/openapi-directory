from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import androidfcmoptions
from . import androidnotification

class AndroidConfigPriorityEnum(str, Enum):
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class AndroidConfig:
    collapse_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collapseKey' }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    direct_boot_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directBootOk' }})
    fcm_options: Optional[androidfcmoptions.AndroidFcmOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fcmOptions' }})
    notification: Optional[androidnotification.AndroidNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    priority: Optional[AndroidConfigPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    restricted_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictedPackageName' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
