from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IterativeCalculationSettings:
    r"""IterativeCalculationSettings
    Settings to control how circular dependencies are resolved with iterative calculation.
    """
    
    convergence_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convergenceThreshold') }})
    max_iterations: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIterations') }})
    
