from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import extramaterial


@dataclass_json
@dataclass
class Feedback:
    material: Optional[List[extramaterial.ExtraMaterial]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'material' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
