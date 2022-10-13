from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueryResultEntry:
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
