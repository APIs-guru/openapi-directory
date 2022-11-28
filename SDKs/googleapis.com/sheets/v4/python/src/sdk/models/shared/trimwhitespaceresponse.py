from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrimWhitespaceResponse:
    r"""TrimWhitespaceResponse
    The result of trimming whitespace in cells.
    """
    
    cells_changed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellsChangedCount') }})
    
