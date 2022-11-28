from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DoubleRange:
    r"""DoubleRange
    Specifies the double start and end of the range using half-open interval semantics [start, end).
    """
    
    end: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
