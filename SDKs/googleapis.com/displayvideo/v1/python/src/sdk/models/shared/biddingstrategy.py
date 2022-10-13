from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fixedbidstrategy
from . import maximizespendbidstrategy
from . import performancegoalbidstrategy


@dataclass_json
@dataclass
class BiddingStrategy:
    fixed_bid: Optional[fixedbidstrategy.FixedBidStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixedBid' }})
    maximize_spend_auto_bid: Optional[maximizespendbidstrategy.MaximizeSpendBidStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximizeSpendAutoBid' }})
    performance_goal_auto_bid: Optional[performancegoalbidstrategy.PerformanceGoalBidStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceGoalAutoBid' }})
    
