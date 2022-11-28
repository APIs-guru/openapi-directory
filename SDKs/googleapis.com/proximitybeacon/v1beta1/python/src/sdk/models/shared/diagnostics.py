from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DiagnosticsAlertsEnum(str, Enum):
    ALERT_UNSPECIFIED = "ALERT_UNSPECIFIED"
    WRONG_LOCATION = "WRONG_LOCATION"
    LOW_BATTERY = "LOW_BATTERY"
    LOW_ACTIVITY = "LOW_ACTIVITY"


@dataclass_json
@dataclass
class Diagnostics:
    r"""Diagnostics
    Diagnostics for a single beacon.
    """
    
    alerts: Optional[List[DiagnosticsAlertsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alerts') }})
    beacon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beaconName') }})
    estimated_low_battery_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedLowBatteryDate') }})
    
