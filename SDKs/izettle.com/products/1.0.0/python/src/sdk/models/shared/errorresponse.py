from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import constraintviolation


@dataclass_json
@dataclass
class ErrorResponse:
    developer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developerMessage' }})
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorType' }})
    violations: Optional[List[constraintviolation.ConstraintViolation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'violations' }})
    
