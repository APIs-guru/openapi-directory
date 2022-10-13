from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1displayinfo


@dataclass_json
@dataclass
class GoogleChromeManagementV1GraphicsStatusReport:
    displays: Optional[List[googlechromemanagementv1displayinfo.GoogleChromeManagementV1DisplayInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displays' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    
