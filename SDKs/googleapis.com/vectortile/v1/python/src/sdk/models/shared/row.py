from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Row:
    r"""Row
    A row of altitude points in the elevation grid, ordered from west to east.
    """
    
    altitude_diffs: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altitudeDiffs') }})
    
