from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListSecuritySettingsResponse:
    r"""GoogleCloudDialogflowCxV3ListSecuritySettingsResponse
    The response message for SecuritySettings.ListSecuritySettings.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    security_settings: Optional[List[GoogleCloudDialogflowCxV3SecuritySettings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securitySettings') }})
    
