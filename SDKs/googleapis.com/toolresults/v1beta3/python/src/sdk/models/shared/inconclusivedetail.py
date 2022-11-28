from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InconclusiveDetail:
    r"""InconclusiveDetail
    Details for an outcome with an INCONCLUSIVE outcome summary.
    """
    
    aborted_by_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortedByUser') }})
    has_error_logs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasErrorLogs') }})
    infrastructure_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureFailure') }})
    
