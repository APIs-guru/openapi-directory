from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Status:
    r"""Status
    Status is a return value for calls that don't return other objects.
    """
    
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    details: Optional[StatusDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    metadata: Optional[ListMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
