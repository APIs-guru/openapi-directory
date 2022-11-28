from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CompositeFilterOpEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    AND = "AND"


@dataclass_json
@dataclass
class CompositeFilter:
    r"""CompositeFilter
    A filter that merges multiple other filters using the given operator.
    """
    
    filters: Optional[List[Filter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    op: Optional[CompositeFilterOpEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    
