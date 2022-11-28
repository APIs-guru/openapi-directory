from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteTextRequest:
    r"""DeleteTextRequest
    Deletes text from a shape or a table cell.
    """
    
    cell_location: Optional[TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellLocation') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    text_range: Optional[Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRange') }})
    
