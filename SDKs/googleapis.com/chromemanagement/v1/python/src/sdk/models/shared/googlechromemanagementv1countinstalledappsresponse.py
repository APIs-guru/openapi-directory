from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountInstalledAppsResponse:
    r"""GoogleChromeManagementV1CountInstalledAppsResponse
    Response containing details of queried installed apps.
    """
    
    installed_apps: Optional[List[GoogleChromeManagementV1InstalledApp]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installedApps') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
