from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import primarystep


@dataclass_json
@dataclass
class MultiStep:
    multistep_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multistepNumber' }})
    primary_step: Optional[primarystep.PrimaryStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryStep' }})
    primary_step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryStepId' }})
    
