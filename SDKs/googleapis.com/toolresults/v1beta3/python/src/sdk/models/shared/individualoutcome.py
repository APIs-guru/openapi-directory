from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IndividualOutcomeOutcomeSummaryEnum(str, Enum):
    UNSET = "unset"
    SUCCESS = "success"
    FAILURE = "failure"
    INCONCLUSIVE = "inconclusive"
    SKIPPED = "skipped"
    FLAKY = "flaky"


@dataclass_json
@dataclass
class IndividualOutcome:
    r"""IndividualOutcome
    Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
    """
    
    multistep_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multistepNumber') }})
    outcome_summary: Optional[IndividualOutcomeOutcomeSummaryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcomeSummary') }})
    run_duration: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runDuration') }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    
