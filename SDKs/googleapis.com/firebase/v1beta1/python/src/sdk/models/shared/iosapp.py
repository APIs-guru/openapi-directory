from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IosAppStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class IosAppInput:
    r"""IosAppInput
    Details of a Firebase App for iOS.
    """
    
    api_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyId') }})
    app_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appStoreId') }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    

@dataclass_json
@dataclass
class IosApp:
    r"""IosApp
    Details of a Firebase App for iOS.
    """
    
    api_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyId') }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    app_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appStoreId') }})
    bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bundleId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    state: Optional[IosAppStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    
