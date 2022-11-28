from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1AudioStatusReport:
    r"""GoogleChromeManagementV1AudioStatusReport
    Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceAudioStatus](https://chromeenterprise.google/policies/#ReportDeviceAudioStatus) * Data Collection Frequency: 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    input_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDevice') }})
    input_gain: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputGain') }})
    input_mute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputMute') }})
    output_device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDevice') }})
    output_mute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputMute') }})
    output_volume: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputVolume') }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    
