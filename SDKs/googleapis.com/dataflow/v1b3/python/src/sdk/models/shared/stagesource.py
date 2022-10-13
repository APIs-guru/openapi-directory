from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StageSource:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_transform_or_collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalTransformOrCollection' }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeBytes' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
