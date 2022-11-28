from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BinLogCoordinates:
    r"""BinLogCoordinates
    Binary log coordinates.
    """
    
    bin_log_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binLogFileName') }})
    bin_log_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binLogPosition') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
