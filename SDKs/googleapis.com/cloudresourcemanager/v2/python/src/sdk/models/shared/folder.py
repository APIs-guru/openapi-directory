from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FolderLifecycleStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETE_REQUESTED = "DELETE_REQUESTED"


@dataclass_json
@dataclass
class FolderInput:
    r"""FolderInput
    A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    

@dataclass_json
@dataclass
class Folder:
    r"""Folder
    A Folder in an Organization's resource hierarchy, used to organize that Organization's resources.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    lifecycle_state: Optional[FolderLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleState') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
