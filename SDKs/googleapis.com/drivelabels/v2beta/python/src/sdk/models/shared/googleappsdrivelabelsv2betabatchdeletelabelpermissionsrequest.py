from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest:
    r"""GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest
    Deletes one of more Label Permissions.
    """
    
    requests: Optional[List[GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    
