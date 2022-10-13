from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import step


@dataclass_json
@dataclass
class Status:
    current_steps: Optional[List[step.Step]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentSteps' }})
    
