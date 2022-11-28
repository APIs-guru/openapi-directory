from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest:
    r"""GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest
    Updates one or more Label Permissions.
    """
    
    requests: Optional[List[GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    
