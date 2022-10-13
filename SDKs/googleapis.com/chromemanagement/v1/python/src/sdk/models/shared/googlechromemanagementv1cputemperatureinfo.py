from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromeManagementV1CPUTemperatureInfo:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    temperature_celsius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temperatureCelsius' }})
    
