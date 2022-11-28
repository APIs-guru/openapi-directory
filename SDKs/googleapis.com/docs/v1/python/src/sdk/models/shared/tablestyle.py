from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableStyle:
    r"""TableStyle
    Styles that apply to a table.
    """
    
    table_column_properties: Optional[List[TableColumnProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableColumnProperties') }})
    
