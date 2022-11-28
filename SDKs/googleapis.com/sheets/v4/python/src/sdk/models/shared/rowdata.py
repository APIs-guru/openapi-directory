from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RowData:
    r"""RowData
    Data about each cell in a row.
    """
    
    values: Optional[List[CellData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
