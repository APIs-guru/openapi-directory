from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourceLocation:
    column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
