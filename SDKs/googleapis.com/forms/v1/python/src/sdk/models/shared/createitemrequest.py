from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateItemRequestInput:
    r"""CreateItemRequestInput
    Create an item in a form.
    """
    
    item: Optional[ItemInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
