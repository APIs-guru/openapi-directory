from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventRetrieved:
    r"""EventRetrieved
    Retrieve Events Response Payload Object Item
    """
    
    body: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    timestamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    state: Optional[MemberStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
