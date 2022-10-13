from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TenantResourceStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PENDING_CREATE = "PENDING_CREATE"
    ACTIVE = "ACTIVE"
    PENDING_DELETE = "PENDING_DELETE"
    FAILED = "FAILED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class TenantResource:
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    status: Optional[TenantResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    
