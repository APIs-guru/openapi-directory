from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ForecastOptimalParametersResponse:
    alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alpha' }})
    beta: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beta' }})
    gamma: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gamma' }})
    
