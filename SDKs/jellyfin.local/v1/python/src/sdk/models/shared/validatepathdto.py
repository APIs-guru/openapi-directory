from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidatePathDto:
    is_file: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsFile' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    validate_writable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidateWritable' }})
    
