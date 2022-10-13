from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import targetreference


@dataclass_json
@dataclass
class Copy:
    original_object: Optional[targetreference.TargetReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalObject' }})
    
