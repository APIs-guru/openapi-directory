from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import date

class DiagnosticsAlertsEnum(str, Enum):
    ALERT_UNSPECIFIED = "ALERT_UNSPECIFIED"
    WRONG_LOCATION = "WRONG_LOCATION"
    LOW_BATTERY = "LOW_BATTERY"
    LOW_ACTIVITY = "LOW_ACTIVITY"


@dataclass_json
@dataclass
class Diagnostics:
    alerts: Optional[List[DiagnosticsAlertsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alerts' }})
    beacon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beaconName' }})
    estimated_low_battery_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedLowBatteryDate' }})
    
