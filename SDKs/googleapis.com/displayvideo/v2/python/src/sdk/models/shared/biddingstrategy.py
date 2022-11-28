from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BiddingStrategy:
    r"""BiddingStrategy
    Settings that control the bid strategy. Bid strategy determines the bid price.
    """
    
    fixed_bid: Optional[FixedBidStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixedBid') }})
    maximize_spend_auto_bid: Optional[MaximizeSpendBidStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximizeSpendAutoBid') }})
    performance_goal_auto_bid: Optional[PerformanceGoalBidStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoalAutoBid') }})
    
