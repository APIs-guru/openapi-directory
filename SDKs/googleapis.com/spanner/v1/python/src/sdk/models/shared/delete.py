from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Delete:
    r"""Delete
    Arguments to delete operations.
    """
    
    key_set: Optional[KeySet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keySet') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
