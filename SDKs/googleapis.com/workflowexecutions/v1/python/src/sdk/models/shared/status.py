from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Status:
    r"""Status
    Represents the current status of this execution.
    """
    
    current_steps: Optional[List[Step]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSteps') }})
    
