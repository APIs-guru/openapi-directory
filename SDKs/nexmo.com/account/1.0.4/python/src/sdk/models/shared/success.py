from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Success:
    error_code: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error-code' }})
    error_code_label: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error-code-label' }})
    
