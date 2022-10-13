from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogEntrySourceLocation:
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    function: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function' }})
    line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    
