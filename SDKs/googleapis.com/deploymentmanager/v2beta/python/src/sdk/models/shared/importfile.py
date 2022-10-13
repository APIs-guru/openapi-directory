from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportFile:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
