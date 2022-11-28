from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GridLayout:
    r"""GridLayout
    A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
    """
    
    columns: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    widgets: Optional[List[Widget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widgets') }})
    
