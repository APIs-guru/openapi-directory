from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MoveItemRequest:
    r"""MoveItemRequest
    Move an item in a form.
    """
    
    new_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newLocation') }})
    original_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalLocation') }})
    
