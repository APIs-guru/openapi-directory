from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1deviceauecountreport


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse:
    device_aue_count_reports: Optional[List[googlechromemanagementv1deviceauecountreport.GoogleChromeManagementV1DeviceAueCountReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceAueCountReports' }})
    
