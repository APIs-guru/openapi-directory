from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Usage:
    r"""Usage
    An amount of usage over a time frame.
    """
    
    usage_rate_timeline: Optional[UsageRateTimeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageRateTimeline') }})
    
