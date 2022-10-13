from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gdatacompositemedia
from . import gdatacompositemedia


@dataclass_json
@dataclass
class GdataDiffUploadRequest:
    checksums_info: Optional[gdatacompositemedia.GdataCompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksumsInfo' }})
    object_info: Optional[gdatacompositemedia.GdataCompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectInfo' }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectVersion' }})
    
