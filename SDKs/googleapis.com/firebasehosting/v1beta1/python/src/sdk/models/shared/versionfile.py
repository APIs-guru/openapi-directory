from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VersionFileStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    EXPECTED = "EXPECTED"
    ACTIVE = "ACTIVE"


@dataclass_json
@dataclass
class VersionFile:
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hash' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    status: Optional[VersionFileStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
