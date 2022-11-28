from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConfigChangeChangeTypeEnum(str, Enum):
    CHANGE_TYPE_UNSPECIFIED = "CHANGE_TYPE_UNSPECIFIED"
    ADDED = "ADDED"
    REMOVED = "REMOVED"
    MODIFIED = "MODIFIED"


@dataclass_json
@dataclass
class ConfigChange:
    r"""ConfigChange
    Output generated from semantically comparing two versions of a service configuration. Includes detailed information about a field that have changed with applicable advice about potential consequences for the change, such as backwards-incompatibility.
    """
    
    advices: Optional[List[Advice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advices') }})
    change_type: Optional[ConfigChangeChangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changeType') }})
    element: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('element') }})
    new_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    old_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldValue') }})
    
