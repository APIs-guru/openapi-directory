from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MenuItem:
    r"""MenuItem
    A custom menu item that can be presented to the user by a timeline item.
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    contextual_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextual_command') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    remove_when_selected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeWhenSelected') }})
    values: Optional[List[MenuValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
