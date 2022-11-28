from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Table:
    r"""Table
    A PageElement kind representing a table.
    """
    
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    horizontal_border_rows: Optional[List[TableBorderRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalBorderRows') }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    table_columns: Optional[List[TableColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableColumns') }})
    table_rows: Optional[List[TableRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRows') }})
    vertical_border_rows: Optional[List[TableBorderRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verticalBorderRows') }})
    
