from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Bucket:
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max' }})
    min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min' }})
    proportion: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proportion' }})
    
