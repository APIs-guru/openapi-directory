from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compositemedia


@dataclass_json
@dataclass
class DiffDownloadResponse:
    object_location: Optional[compositemedia.CompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectLocation' }})
    
