from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AndroidConfigPriorityEnum(str, Enum):
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class AndroidConfig:
    r"""AndroidConfig
    Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
    """
    
    collapse_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collapseKey') }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    direct_boot_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directBootOk') }})
    fcm_options: Optional[AndroidFcmOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmOptions') }})
    notification: Optional[AndroidNotification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    priority: Optional[AndroidConfigPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    restricted_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedPackageName') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
