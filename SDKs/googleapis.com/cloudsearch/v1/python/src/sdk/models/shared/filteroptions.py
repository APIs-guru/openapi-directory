from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterOptions:
    r"""FilterOptions
    Filter options to be applied on query.
    """
    
    filter: Optional[Filter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType') }})
    
