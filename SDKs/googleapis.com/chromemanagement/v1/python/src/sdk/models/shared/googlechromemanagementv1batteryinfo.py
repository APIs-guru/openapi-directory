from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1BatteryInfo:
    r"""GoogleChromeManagementV1BatteryInfo
    Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    design_capacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designCapacity') }})
    design_min_voltage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('designMinVoltage') }})
    manufacture_date: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufactureDate') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    technology: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('technology') }})
    
