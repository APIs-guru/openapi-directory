from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TopDirectionSources:
    r"""TopDirectionSources
    Top regions where driving-direction requests originated from.
    """
    
    day_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayCount') }})
    region_counts: Optional[List[RegionCount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCounts') }})
    
