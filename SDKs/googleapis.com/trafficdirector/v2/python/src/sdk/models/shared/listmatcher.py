from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMatcher:
    r"""ListMatcher
    Specifies the way to match a list value.
    """
    
    one_of: Optional[ValueMatcher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneOf') }})
    
