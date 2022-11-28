from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Connection:
    r"""Connection
    A connection is the link from a source photo to a destination photo.
    """
    
    target: Optional[PhotoID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
