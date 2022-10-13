from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomViewabilityMetricConfiguration:
    audible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audible' }})
    time_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeMillis' }})
    time_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timePercent' }})
    viewability_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewabilityPercent' }})
    
