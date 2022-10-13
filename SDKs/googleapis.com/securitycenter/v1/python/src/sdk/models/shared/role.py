from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RoleKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    ROLE = "ROLE"
    CLUSTER_ROLE = "CLUSTER_ROLE"


@dataclass_json
@dataclass
class Role:
    kind: Optional[RoleKindEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ns' }})
    
