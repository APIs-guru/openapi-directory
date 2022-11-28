from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1FindInstalledAppDevicesResponse:
    r"""GoogleChromeManagementV1FindInstalledAppDevicesResponse
    Response containing a list of devices with queried app installed.
    """
    
    devices: Optional[List[GoogleChromeManagementV1Device]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
