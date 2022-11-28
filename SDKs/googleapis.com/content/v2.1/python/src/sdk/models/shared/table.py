from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Table:
    column_headers: Optional[Headers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnHeaders') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    row_headers: Optional[Headers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowHeaders') }})
    rows: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
