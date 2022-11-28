from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsertTableColumnsRequest:
    r"""InsertTableColumnsRequest
    Inserts columns into a table. Other columns in the table will be resized to fit the new column.
    """
    
    cell_location: Optional[TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellLocation') }})
    insert_right: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertRight') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    table_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableObjectId') }})
    
