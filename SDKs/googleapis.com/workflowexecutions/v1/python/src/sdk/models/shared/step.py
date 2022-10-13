from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Step:
    routine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routine' }})
    step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'step' }})
    
