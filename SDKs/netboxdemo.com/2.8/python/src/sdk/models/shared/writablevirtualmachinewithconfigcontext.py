from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableVirtualMachineWithConfigContextStatusEnum(str, Enum):
    OFFLINE = "offline"
    ACTIVE = "active"
    PLANNED = "planned"
    STAGED = "staged"
    FAILED = "failed"
    DECOMMISSIONING = "decommissioning"


@dataclass_json
@dataclass
class WritableVirtualMachineWithConfigContextInput:
    cluster: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    disk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    local_context_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local_context_data') }})
    memory: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    platform: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    primary_ip4: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip4') }})
    primary_ip6: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_ip6') }})
    role: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    status: Optional[WritableVirtualMachineWithConfigContextStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tenant: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    vcpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    
