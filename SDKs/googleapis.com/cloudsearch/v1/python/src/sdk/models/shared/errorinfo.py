from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errormessage


@dataclass_json
@dataclass
class ErrorInfo:
    error_messages: Optional[List[errormessage.ErrorMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessages' }})
    
