from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextFormatRun:
    r"""TextFormatRun
    A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
    """
    
    format: Optional[TextFormat] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    
