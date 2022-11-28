from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse:
    r"""GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse
    The response message for SecuritySettings.ListSecuritySettings.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    security_settings: Optional[List[GoogleCloudDialogflowCxV3beta1SecuritySettings]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securitySettings') }})
    
