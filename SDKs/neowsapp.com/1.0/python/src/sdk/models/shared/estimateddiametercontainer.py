from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import estimateddiameter
from . import estimateddiameter
from . import estimateddiameter
from . import estimateddiameter


@dataclass_json
@dataclass
class EstimatedDiameterContainer:
    feet: Optional[estimateddiameter.EstimatedDiameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feet' }})
    kilometers: Optional[estimateddiameter.EstimatedDiameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kilometers' }})
    meters: Optional[estimateddiameter.EstimatedDiameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meters' }})
    miles: Optional[estimateddiameter.EstimatedDiameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miles' }})
    
