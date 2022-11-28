from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MultiStep:
    r"""MultiStep
    Details when multiple steps are run with the same configuration as a group.
    """
    
    multistep_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multistepNumber') }})
    primary_step: Optional[PrimaryStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryStep') }})
    primary_step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryStepId') }})
    
