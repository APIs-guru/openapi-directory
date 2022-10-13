from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Source:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    official: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'official' }})
    
