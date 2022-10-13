from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MaximizeSpendBidStrategyPerformanceGoalTypeEnum(str, Enum):
    BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED"
    BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA"
    BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC"
    BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM"
    BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO"
    BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA"
    BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN"
    BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED"


@dataclass_json
@dataclass
class MaximizeSpendBidStrategy:
    custom_bidding_algorithm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customBiddingAlgorithmId' }})
    max_average_cpm_bid_amount_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAverageCpmBidAmountMicros' }})
    performance_goal_type: Optional[MaximizeSpendBidStrategyPerformanceGoalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceGoalType' }})
    raise_bid_for_deals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raiseBidForDeals' }})
    
