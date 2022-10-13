from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InstanceStateEnum(str, Enum):
    STATE_NOT_KNOWN = "STATE_NOT_KNOWN"
    READY = "READY"
    CREATING = "CREATING"

class InstanceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PRODUCTION = "PRODUCTION"
    DEVELOPMENT = "DEVELOPMENT"


@dataclass_json
@dataclass
class Instance:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    satisfies_pzs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satisfiesPzs' }})
    state: Optional[InstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
