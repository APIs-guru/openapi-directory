from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import client
from . import folder
from . import tag
from . import trigger
from . import variable

class EntityChangeStatusEnum(str, Enum):
    CHANGE_STATUS_UNSPECIFIED = "changeStatusUnspecified"
    NONE = "none"
    ADDED = "added"
    DELETED = "deleted"
    UPDATED = "updated"


@dataclass_json
@dataclass
class Entity:
    change_status: Optional[EntityChangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changeStatus' }})
    client: Optional[client.Client] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    folder: Optional[folder.Folder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder' }})
    tag: Optional[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    trigger: Optional[trigger.Trigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    variable: Optional[variable.Variable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variable' }})
    
