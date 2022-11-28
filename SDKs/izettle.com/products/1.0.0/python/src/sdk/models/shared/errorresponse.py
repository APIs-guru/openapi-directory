from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ErrorResponse:
    developer_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMessage') }})
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    violations: Optional[List[ConstraintViolation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violations') }})
    
