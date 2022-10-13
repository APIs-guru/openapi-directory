from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypedate


@dataclass_json
@dataclass
class GoogleChromeManagementV1BatteryInfo:
    design_capacity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designCapacity' }})
    design_min_voltage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'designMinVoltage' }})
    manufacture_date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufactureDate' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    technology: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'technology' }})
    
