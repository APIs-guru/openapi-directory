from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountSettingsObjectStorageEnum(str, Enum):
    DISABLED = "disabled"
    SUSPENDED = "suspended"
    ACTIVE = "active"


@dataclass_json
@dataclass
class AccountSettingsInput:
    r"""AccountSettingsInput
    Account Settings object
    """
    
    backups_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups_enabled') }})
    network_helper: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_helper') }})
    

@dataclass_json
@dataclass
class AccountSettings:
    r"""AccountSettings
    Account Settings object
    """
    
    backups_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups_enabled') }})
    longview_subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longview_subscription') }})
    managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managed') }})
    network_helper: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_helper') }})
    object_storage: Optional[AccountSettingsObjectStorageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object_storage') }})
    
