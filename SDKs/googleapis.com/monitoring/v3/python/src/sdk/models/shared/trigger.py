from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Trigger:
    r"""Trigger
    Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used.
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    percent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent') }})
    
