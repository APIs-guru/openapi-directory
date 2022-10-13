from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1installedapp


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountInstalledAppsResponse:
    installed_apps: Optional[List[googlechromemanagementv1installedapp.GoogleChromeManagementV1InstalledApp]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installedApps' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
