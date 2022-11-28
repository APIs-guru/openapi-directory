from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Step:
    r"""Step
    Represents a step of the workflow this execution is running.
    """
    
    routine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routine') }})
    step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('step') }})
    
