from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse:
    r"""GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse
    Response for listing the permissions on a Label.
    """
    
    label_permissions: Optional[List[GoogleAppsDriveLabelsV2betaLabelPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelPermissions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
