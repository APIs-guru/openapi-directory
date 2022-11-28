from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrganizationLifecycleStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETE_REQUESTED = "DELETE_REQUESTED"


@dataclass_json
@dataclass
class Organization:
    r"""Organization
    The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong.
    """
    
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    lifecycle_state: Optional[OrganizationLifecycleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifecycleState') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner: Optional[OrganizationOwner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    
