from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsertTableRequest:
    r"""InsertTableRequest
    Inserts a table at the specified location. A newline character will be inserted before the inserted table.
    """
    
    columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    end_of_segment_location: Optional[EndOfSegmentLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endOfSegmentLocation') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
