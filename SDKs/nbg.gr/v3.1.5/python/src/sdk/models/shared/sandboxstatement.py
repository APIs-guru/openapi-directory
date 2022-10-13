from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SandboxStatement:
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
