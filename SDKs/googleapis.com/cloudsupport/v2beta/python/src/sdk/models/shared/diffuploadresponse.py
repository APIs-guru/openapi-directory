from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compositemedia


@dataclass_json
@dataclass
class DiffUploadResponse:
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectVersion' }})
    original_object: Optional[compositemedia.CompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalObject' }})
    
