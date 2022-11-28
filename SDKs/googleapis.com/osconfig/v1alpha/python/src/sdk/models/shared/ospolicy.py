from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OsPolicyModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    VALIDATION = "VALIDATION"
    ENFORCEMENT = "ENFORCEMENT"


@dataclass_json
@dataclass
class OsPolicy:
    r"""OsPolicy
    An OS policy defines the desired state configuration for a VM.
    """
    
    allow_no_resource_group_match: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowNoResourceGroupMatch') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: Optional[OsPolicyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    resource_groups: Optional[List[OsPolicyResourceGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceGroups') }})
    
