from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamicLinkStats:
    r"""DynamicLinkStats
    Analytics stats of a Dynamic Link for a given timeframe.
    """
    
    link_event_stats: Optional[List[DynamicLinkEventStat]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkEventStats') }})
    
