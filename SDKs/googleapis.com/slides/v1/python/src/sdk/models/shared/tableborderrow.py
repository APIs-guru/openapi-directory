from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableBorderRow:
    r"""TableBorderRow
    Contents of each border row in a table.
    """
    
    table_border_cells: Optional[List[TableBorderCell]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableBorderCells') }})
    
