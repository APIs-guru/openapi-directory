from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gdatacompositemedia


@dataclass_json
@dataclass
class GdataDiffDownloadResponse:
    object_location: Optional[gdatacompositemedia.GdataCompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectLocation' }})
    
