from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import failuredetail
from . import inconclusivedetail
from . import skippeddetail
from . import successdetail

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
    failure_detail: Optional[failuredetail.FailureDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureDetail' }})
    inconclusive_detail: Optional[inconclusivedetail.InconclusiveDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inconclusiveDetail' }})
    skipped_detail: Optional[skippeddetail.SkippedDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippedDetail' }})
    success_detail: Optional[successdetail.SuccessDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successDetail' }})
    summary: Optional[OutcomeSummaryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
