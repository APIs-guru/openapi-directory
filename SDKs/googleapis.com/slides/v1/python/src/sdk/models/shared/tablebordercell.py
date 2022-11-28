from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableBorderCell:
    r"""TableBorderCell
    The properties of each border cell.
    """
    
    location: Optional[TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    table_border_properties: Optional[TableBorderProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableBorderProperties') }})
    
