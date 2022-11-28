from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GuestAttributesValue:
    r"""GuestAttributesValue
    Array of guest attribute namespace/key/value tuples.
    """
    
    items: Optional[List[GuestAttributesEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
