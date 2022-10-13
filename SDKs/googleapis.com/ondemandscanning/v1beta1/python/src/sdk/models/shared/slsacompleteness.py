from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SlsaCompleteness:
    arguments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arguments' }})
    environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    materials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materials' }})
    
