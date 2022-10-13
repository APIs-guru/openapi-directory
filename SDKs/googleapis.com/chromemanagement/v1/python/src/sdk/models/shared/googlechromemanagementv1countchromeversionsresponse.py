from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1browserversion


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeVersionsResponse:
    browser_versions: Optional[List[googlechromemanagementv1browserversion.GoogleChromeManagementV1BrowserVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browserVersions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
