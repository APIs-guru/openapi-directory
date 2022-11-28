from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeleteTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TRASH = "TRASH"
    PERMANENT_DELETE = "PERMANENT_DELETE"


@dataclass_json
@dataclass
class Delete:
    r"""Delete
    An object was deleted.
    """
    
    type: Optional[DeleteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
