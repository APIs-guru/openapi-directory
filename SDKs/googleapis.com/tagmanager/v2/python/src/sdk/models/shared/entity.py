from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EntityChangeStatusEnum(str, Enum):
    CHANGE_STATUS_UNSPECIFIED = "changeStatusUnspecified"
    NONE = "none"
    ADDED = "added"
    DELETED = "deleted"
    UPDATED = "updated"


@dataclass_json
@dataclass
class Entity:
    r"""Entity
    A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
    """
    
    change_status: Optional[EntityChangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeStatus') }})
    client: Optional[Client] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    folder: Optional[Folder] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folder') }})
    tag: Optional[Tag] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    trigger: Optional[Trigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    variable: Optional[Variable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variable') }})
    
