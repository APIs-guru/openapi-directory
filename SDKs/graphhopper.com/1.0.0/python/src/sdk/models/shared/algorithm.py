from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AlgorithmObjectiveEnum(str, Enum):
    TRANSPORT_TIME = "transport_time"
    COMPLETION_TIME = "completion_time"

class AlgorithmProblemTypeEnum(str, Enum):
    MIN = "min"
    MIN_MAX = "min-max"


@dataclass_json
@dataclass
class Algorithm:
    r"""Algorithm
    Use `objectives` instead.
    """
    
    objective: Optional[AlgorithmObjectiveEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objective') }})
    problem_type: Optional[AlgorithmProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('problem_type') }})
    
