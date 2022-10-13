from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gdatacompositemedia


@dataclass_json
@dataclass
class GdataDiffUploadResponse:
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectVersion' }})
    original_object: Optional[gdatacompositemedia.GdataCompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalObject' }})
    
