from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EstimatedDiameter:
    estimated_diameter_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_diameter_max' }})
    estimated_diameter_min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_diameter_min' }})
    
