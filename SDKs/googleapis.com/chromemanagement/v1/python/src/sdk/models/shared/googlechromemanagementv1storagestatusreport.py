from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1diskinfo


@dataclass_json
@dataclass
class GoogleChromeManagementV1StorageStatusReport:
    disk: Optional[List[googlechromemanagementv1diskinfo.GoogleChromeManagementV1DiskInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    
