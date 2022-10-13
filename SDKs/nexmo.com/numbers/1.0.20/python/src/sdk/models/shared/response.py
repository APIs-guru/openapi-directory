from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Response:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error-code' }})
    error_code_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error-code-label' }})
    
