from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest:
    r"""GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest
    Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    
