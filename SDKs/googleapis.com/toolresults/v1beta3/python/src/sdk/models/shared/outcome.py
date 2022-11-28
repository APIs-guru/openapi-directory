from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OutcomeSummaryEnum(str, Enum):
    UNSET = "unset"
    SUCCESS = "success"
    FAILURE = "failure"
    INCONCLUSIVE = "inconclusive"
    SKIPPED = "skipped"
    FLAKY = "flaky"


@dataclass_json
@dataclass
class Outcome:
    r"""Outcome
    Interprets a result so that humans and machines can act on it.
    """
    
    failure_detail: Optional[FailureDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureDetail') }})
    inconclusive_detail: Optional[InconclusiveDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inconclusiveDetail') }})
    skipped_detail: Optional[SkippedDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedDetail') }})
    success_detail: Optional[SuccessDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successDetail') }})
    summary: Optional[OutcomeSummaryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    
