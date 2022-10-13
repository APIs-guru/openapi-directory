from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compositemedia
from . import compositemedia


@dataclass_json
@dataclass
class DiffUploadRequest:
    checksums_info: Optional[compositemedia.CompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checksumsInfo' }})
    object_info: Optional[compositemedia.CompositeMedia] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectInfo' }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectVersion' }})
    
