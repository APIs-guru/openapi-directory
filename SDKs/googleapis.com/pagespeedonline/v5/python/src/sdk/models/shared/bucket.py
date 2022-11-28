from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Bucket:
    r"""Bucket
    A proportion of data in the total distribution, bucketed by a min/max percentage. Each bucket's range is bounded by min <= x < max, In millisecond.
    """
    
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    proportion: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proportion') }})
    
