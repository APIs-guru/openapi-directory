from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListenRequest:
    r"""ListenRequest
    A request for Firestore.Listen
    """
    
    add_target: Optional[Target] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addTarget') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    remove_target: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeTarget') }})
    
