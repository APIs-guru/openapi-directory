from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SourcePosition:
    column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    current_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentOffset' }})
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endOffset' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    
