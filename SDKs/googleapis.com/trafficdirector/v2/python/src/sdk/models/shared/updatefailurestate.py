from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateFailureState:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    failed_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failedConfiguration' }})
    last_update_attempt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateAttempt' }})
    
