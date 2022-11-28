from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse:
    r"""GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
    Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
    """
    
    cpu_reports: Optional[List[GoogleChromeManagementV1DeviceHardwareCountReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuReports') }})
    memory_reports: Optional[List[GoogleChromeManagementV1DeviceHardwareCountReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryReports') }})
    model_reports: Optional[List[GoogleChromeManagementV1DeviceHardwareCountReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelReports') }})
    storage_reports: Optional[List[GoogleChromeManagementV1DeviceHardwareCountReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageReports') }})
    
