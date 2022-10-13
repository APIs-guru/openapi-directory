from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1devicehardwarecountreport
from . import googlechromemanagementv1devicehardwarecountreport
from . import googlechromemanagementv1devicehardwarecountreport
from . import googlechromemanagementv1devicehardwarecountreport


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse:
    cpu_reports: Optional[List[googlechromemanagementv1devicehardwarecountreport.GoogleChromeManagementV1DeviceHardwareCountReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuReports' }})
    memory_reports: Optional[List[googlechromemanagementv1devicehardwarecountreport.GoogleChromeManagementV1DeviceHardwareCountReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryReports' }})
    model_reports: Optional[List[googlechromemanagementv1devicehardwarecountreport.GoogleChromeManagementV1DeviceHardwareCountReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelReports' }})
    storage_reports: Optional[List[googlechromemanagementv1devicehardwarecountreport.GoogleChromeManagementV1DeviceHardwareCountReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageReports' }})
    
