from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SplitInt64:
    r"""SplitInt64
    A representation of an int64, n, that is immune to precision loss when encoded in JSON.
    """
    
    high_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highBits') }})
    low_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowBits') }})
    
