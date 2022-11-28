from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UserAction:
    r"""UserAction
    Represents an action taken by the user that triggered a notification.
    """
    
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
