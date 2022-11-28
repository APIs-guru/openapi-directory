from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse:
    r"""GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
    Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
    """
    
    device_aue_count_reports: Optional[List[GoogleChromeManagementV1DeviceAueCountReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceAueCountReports') }})
    
