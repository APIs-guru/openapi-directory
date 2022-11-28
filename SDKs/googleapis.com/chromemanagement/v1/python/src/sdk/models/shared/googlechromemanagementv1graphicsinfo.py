from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1GraphicsInfo:
    r"""GoogleChromeManagementV1GraphicsInfo
    Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    adapter_info: Optional[GoogleChromeManagementV1GraphicsAdapterInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adapterInfo') }})
    
