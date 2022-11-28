from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Detection:
    r"""Detection
    Memory hash detection contributing to the binary family match.
    """
    
    binary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binary') }})
    percent_pages_matched: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentPagesMatched') }})
    
