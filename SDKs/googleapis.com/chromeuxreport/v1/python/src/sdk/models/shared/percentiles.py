from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Percentiles:
    r"""Percentiles
    Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.
    """
    
    p75: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p75') }})
    
