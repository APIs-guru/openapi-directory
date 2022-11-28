from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Actor:
    r"""Actor
    The actor of a Drive activity.
    """
    
    administrator: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('administrator') }})
    anonymous: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anonymous') }})
    impersonation: Optional[Impersonation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impersonation') }})
    system: Optional[SystemEvent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
