from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObjectFilterStatusEnum(str, Enum):
    NONE = "NONE"
    ASSIGNED = "ASSIGNED"
    ALL = "ALL"


@dataclass_json
@dataclass
class ObjectFilter:
    r"""ObjectFilter
    Object Filter.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIds') }})
    status: Optional[ObjectFilterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
