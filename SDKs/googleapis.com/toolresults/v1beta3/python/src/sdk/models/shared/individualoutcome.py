from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import duration

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
    multistep_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multistepNumber' }})
    outcome_summary: Optional[IndividualOutcomeOutcomeSummaryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcomeSummary' }})
    run_duration: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runDuration' }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepId' }})
    
