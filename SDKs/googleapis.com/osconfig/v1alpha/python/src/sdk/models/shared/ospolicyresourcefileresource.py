from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcefile

class OsPolicyResourceFileResourceStateEnum(str, Enum):
    DESIRED_STATE_UNSPECIFIED = "DESIRED_STATE_UNSPECIFIED"
    PRESENT = "PRESENT"
    ABSENT = "ABSENT"
    CONTENTS_MATCH = "CONTENTS_MATCH"


@dataclass_json
@dataclass
class OsPolicyResourceFileResource:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    file: Optional[ospolicyresourcefile.OsPolicyResourceFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    permissions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    state: Optional[OsPolicyResourceFileResourceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
