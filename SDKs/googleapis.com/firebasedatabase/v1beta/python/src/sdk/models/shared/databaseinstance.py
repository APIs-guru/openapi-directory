from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DatabaseInstanceStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DISABLED = "DISABLED"
    DELETED = "DELETED"

class DatabaseInstanceTypeEnum(str, Enum):
    DATABASE_INSTANCE_TYPE_UNSPECIFIED = "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
    DEFAULT_DATABASE = "DEFAULT_DATABASE"
    USER_DATABASE = "USER_DATABASE"


@dataclass_json
@dataclass
class DatabaseInstance:
    database_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    state: Optional[DatabaseInstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[DatabaseInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
