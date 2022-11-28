from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1BatterySampleReport:
    r"""GoogleChromeManagementV1BatterySampleReport
    Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    charge_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeRate') }})
    current: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    discharge_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dischargeRate') }})
    remaining_capacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingCapacity') }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    temperature: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temperature') }})
    voltage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voltage') }})
    
