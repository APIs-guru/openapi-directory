from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import individualoutcome

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
    individual_outcome: Optional[List[individualoutcome.IndividualOutcome]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individualOutcome' }})
    roll_up: Optional[PrimaryStepRollUpEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollUp' }})
    
