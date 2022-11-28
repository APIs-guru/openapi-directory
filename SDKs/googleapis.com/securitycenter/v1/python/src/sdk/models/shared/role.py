from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RoleKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    ROLE = "ROLE"
    CLUSTER_ROLE = "CLUSTER_ROLE"


@dataclass_json
@dataclass
class Role:
    r"""Role
    Kubernetes Role or ClusterRole.
    """
    
    kind: Optional[RoleKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ns') }})
    
