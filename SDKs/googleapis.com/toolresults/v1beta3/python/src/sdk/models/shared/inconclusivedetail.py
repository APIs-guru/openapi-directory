from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InconclusiveDetail:
    aborted_by_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortedByUser' }})
    has_error_logs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasErrorLogs' }})
    infrastructure_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureFailure' }})
    
