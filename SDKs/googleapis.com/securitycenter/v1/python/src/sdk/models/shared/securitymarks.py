from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SecurityMarks:
    canonical_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalName' }})
    marks: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marks' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
