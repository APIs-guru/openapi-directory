from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BucketRange:
    r"""BucketRange
    Represents starting and ending value of a range in double.
    """
    
    from_: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
