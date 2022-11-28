from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Aggregation:
    r"""Aggregation
    Defines a aggregation that produces a single result.
    """
    
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    count: Optional[Count] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    
