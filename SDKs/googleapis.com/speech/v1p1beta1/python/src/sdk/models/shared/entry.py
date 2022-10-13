from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Entry:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    replace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replace' }})
    search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search' }})
    
