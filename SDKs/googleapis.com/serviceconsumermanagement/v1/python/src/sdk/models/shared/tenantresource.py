from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""TenantResource
    Resource constituting the TenancyUnit.
    """
    
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    status: Optional[TenantResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
