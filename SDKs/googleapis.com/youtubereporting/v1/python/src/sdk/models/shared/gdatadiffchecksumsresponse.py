from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gdatacompositemedia
from . import gdatacompositemedia


@dataclass_json
@dataclass
class GdataDiffChecksumsResponse:
    checksums_location: Optional[gdatacompositemedia.GdataCompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksumsLocation' }})
    chunk_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chunkSizeBytes' }})
    object_location: Optional[gdatacompositemedia.GdataCompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectLocation' }})
    object_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectSizeBytes' }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectVersion' }})
    
