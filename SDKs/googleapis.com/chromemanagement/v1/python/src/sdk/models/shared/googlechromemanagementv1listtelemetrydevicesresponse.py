from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1telemetrydevice


@dataclass_json
@dataclass
class GoogleChromeManagementV1ListTelemetryDevicesResponse:
    devices: Optional[List[googlechromemanagementv1telemetrydevice.GoogleChromeManagementV1TelemetryDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
