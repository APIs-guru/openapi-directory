from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomErrorRule:
    is_error_type: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isErrorType' }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    
