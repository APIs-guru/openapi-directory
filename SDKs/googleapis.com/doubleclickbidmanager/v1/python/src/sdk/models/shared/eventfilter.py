from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventFilter:
    r"""EventFilter
    Defines the type of filter to be applied to the path, a DV360 event dimension filter.
    """
    
    dimension_filter: Optional[PathQueryOptionsFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    
