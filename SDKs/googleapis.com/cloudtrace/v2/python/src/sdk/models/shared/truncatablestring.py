from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TruncatableString:
    r"""TruncatableString
    Represents a string that might be shortened to a specified length.
    """
    
    truncated_byte_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('truncatedByteCount') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
