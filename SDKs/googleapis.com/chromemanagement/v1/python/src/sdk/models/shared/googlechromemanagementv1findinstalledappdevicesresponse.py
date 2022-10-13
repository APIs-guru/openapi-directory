from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1device


@dataclass_json
@dataclass
class GoogleChromeManagementV1FindInstalledAppDevicesResponse:
    devices: Optional[List[googlechromemanagementv1device.GoogleChromeManagementV1Device]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
