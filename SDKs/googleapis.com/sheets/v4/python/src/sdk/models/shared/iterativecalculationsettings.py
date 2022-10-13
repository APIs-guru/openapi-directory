from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IterativeCalculationSettings:
    convergence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'convergenceThreshold' }})
    max_iterations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxIterations' }})
    
