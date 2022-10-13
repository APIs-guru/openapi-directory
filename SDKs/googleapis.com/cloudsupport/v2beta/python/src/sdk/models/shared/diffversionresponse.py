from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DiffVersionResponse:
    object_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectSizeBytes' }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectVersion' }})
    
