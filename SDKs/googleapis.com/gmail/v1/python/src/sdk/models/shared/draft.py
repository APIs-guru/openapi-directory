from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Draft:
    r"""Draft
    A draft email in the user's mailbox.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
