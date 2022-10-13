from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MissDistance:
    astronomical: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'astronomical' }})
    kilometers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kilometers' }})
    lunar: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lunar' }})
    miles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miles' }})
    
