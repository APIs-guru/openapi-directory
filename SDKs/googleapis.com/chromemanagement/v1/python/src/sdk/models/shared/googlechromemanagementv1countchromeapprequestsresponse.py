from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeAppRequestsResponse:
    r"""GoogleChromeManagementV1CountChromeAppRequestsResponse
    Response containing summary of requested app installations.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    requested_apps: Optional[List[GoogleChromeManagementV1ChromeAppRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedApps') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
