from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GuestAttributes:
    r"""GuestAttributes
    A guest attributes.
    """
    
    query_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryPath') }})
    query_value: Optional[GuestAttributesValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryValue') }})
    
