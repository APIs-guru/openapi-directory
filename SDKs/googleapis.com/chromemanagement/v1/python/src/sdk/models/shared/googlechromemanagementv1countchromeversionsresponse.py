from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeVersionsResponse:
    r"""GoogleChromeManagementV1CountChromeVersionsResponse
    Response containing requested browser versions details and counts.
    """
    
    browser_versions: Optional[List[GoogleChromeManagementV1BrowserVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('browserVersions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
