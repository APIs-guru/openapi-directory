from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class YoutubeAndPartnersBiddingStrategyTypeEnum(str, Enum):
    YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED"
    YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV"
    YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM"
    YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA"
    YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM"
    YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT"
    YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS"


@dataclass_json
@dataclass
class YoutubeAndPartnersBiddingStrategy:
    r"""YoutubeAndPartnersBiddingStrategy
    Settings that control the bid strategy for YouTube and Partners resources.
    """
    
    type: Optional[YoutubeAndPartnersBiddingStrategyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
