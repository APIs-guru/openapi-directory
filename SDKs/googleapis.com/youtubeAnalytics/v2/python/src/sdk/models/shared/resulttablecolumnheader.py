from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResultTableColumnHeader:
    r"""ResultTableColumnHeader
    The description of a column of the result table.
    """
    
    column_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnType') }})
    data_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
