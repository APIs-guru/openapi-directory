from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import error


@dataclass_json
@dataclass
class ErrorResponse:
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    
