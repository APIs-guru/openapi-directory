from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DuplicateFilterViewResponse:
    r"""DuplicateFilterViewResponse
    The result of a filter view being duplicated.
    """
    
    filter: Optional[FilterView] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    
