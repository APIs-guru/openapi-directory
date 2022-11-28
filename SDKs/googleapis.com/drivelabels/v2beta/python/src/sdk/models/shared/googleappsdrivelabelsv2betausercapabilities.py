from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaUserCapabilities:
    r"""GoogleAppsDriveLabelsV2betaUserCapabilities
    The capabilities of a user.
    """
    
    can_access_label_manager: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canAccessLabelManager') }})
    can_administrate_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canAdministrateLabels') }})
    can_create_admin_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateAdminLabels') }})
    can_create_shared_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateSharedLabels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
