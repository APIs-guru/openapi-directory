from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlechromemanagementv1batterysamplereport

class GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum(str, Enum):
    BATTERY_HEALTH_UNSPECIFIED = "BATTERY_HEALTH_UNSPECIFIED"
    BATTERY_HEALTH_NORMAL = "BATTERY_HEALTH_NORMAL"
    BATTERY_REPLACE_SOON = "BATTERY_REPLACE_SOON"
    BATTERY_REPLACE_NOW = "BATTERY_REPLACE_NOW"


@dataclass_json
@dataclass
class GoogleChromeManagementV1BatteryStatusReport:
    battery_health: Optional[GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batteryHealth' }})
    cycle_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cycleCount' }})
    full_charge_capacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullChargeCapacity' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    sample: Optional[List[googlechromemanagementv1batterysamplereport.GoogleChromeManagementV1BatterySampleReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sample' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    
