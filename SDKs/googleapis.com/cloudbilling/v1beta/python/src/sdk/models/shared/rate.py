from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Rate:
    r"""Rate
    A SKU price consisting of tiered rates.
    """
    
    tiers: Optional[List[RateTier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiers') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    unit_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitCount') }})
    
