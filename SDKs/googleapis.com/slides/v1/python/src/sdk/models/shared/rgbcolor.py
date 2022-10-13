from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RgbColor:
    blue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blue' }})
    green: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'green' }})
    red: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'red' }})
    
