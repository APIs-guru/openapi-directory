from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Column:
    r"""Column
    Defines the layout properties and content for a column.
    """
    
    weight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    widgets: Optional[List[Widget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widgets') }})
    
