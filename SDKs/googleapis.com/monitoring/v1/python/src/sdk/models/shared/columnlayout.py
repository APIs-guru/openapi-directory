from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnLayout:
    r"""ColumnLayout
    A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.
    """
    
    columns: Optional[List[Column]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    
