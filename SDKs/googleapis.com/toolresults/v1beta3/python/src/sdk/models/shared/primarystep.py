from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PrimaryStepRollUpEnum(str, Enum):
    UNSET = "unset"
    SUCCESS = "success"
    FAILURE = "failure"
    INCONCLUSIVE = "inconclusive"
    SKIPPED = "skipped"
    FLAKY = "flaky"


@dataclass_json
@dataclass
class PrimaryStep:
    r"""PrimaryStep
    Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
    """
    
    individual_outcome: Optional[List[IndividualOutcome]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individualOutcome') }})
    roll_up: Optional[PrimaryStepRollUpEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollUp') }})
    
