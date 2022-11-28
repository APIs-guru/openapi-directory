from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LkeNodeStatusStatusEnum(str, Enum):
    READY = "ready"
    NOT_READY = "not_ready"


@dataclass_json
@dataclass
class LkeNodeStatus:
    r"""LkeNodeStatus
    Status information for a Node which is a member of a Kubernetes cluster.
    
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance_id') }})
    status: Optional[LkeNodeStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
