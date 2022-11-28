from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Range:
    r"""Range
    The range of the population values.
    """
    
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    
