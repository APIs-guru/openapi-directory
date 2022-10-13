from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1BatterySampleReport:
    charge_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargeRate' }})
    current: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current' }})
    discharge_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dischargeRate' }})
    remaining_capacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingCapacity' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    temperature: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temperature' }})
    voltage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voltage' }})
    
