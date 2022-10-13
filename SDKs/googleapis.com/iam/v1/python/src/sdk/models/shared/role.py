from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class RoleStageEnum(str, Enum):
    ALPHA = "ALPHA"
    BETA = "BETA"
    GA = "GA"
    DEPRECATED = "DEPRECATED"
    DISABLED = "DISABLED"
    EAP = "EAP"


@dataclass_json
@dataclass
class Role:
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    included_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedPermissions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    stage: Optional[RoleStageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stage' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
