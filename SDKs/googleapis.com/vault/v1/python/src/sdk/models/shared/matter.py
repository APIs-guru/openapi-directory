from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import matterpermission

class MatterStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    OPEN = "OPEN"
    CLOSED = "CLOSED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class Matter:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    matter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matterId' }})
    matter_permissions: Optional[List[matterpermission.MatterPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matterPermissions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[MatterStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
