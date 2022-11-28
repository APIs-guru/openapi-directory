from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountActiveAdSummaryActiveAdsLimitTierEnum(str, Enum):
    ACTIVE_ADS_TIER_40_K = "ACTIVE_ADS_TIER_40K"
    ACTIVE_ADS_TIER_75_K = "ACTIVE_ADS_TIER_75K"
    ACTIVE_ADS_TIER_100_K = "ACTIVE_ADS_TIER_100K"
    ACTIVE_ADS_TIER_200_K = "ACTIVE_ADS_TIER_200K"
    ACTIVE_ADS_TIER_300_K = "ACTIVE_ADS_TIER_300K"
    ACTIVE_ADS_TIER_500_K = "ACTIVE_ADS_TIER_500K"
    ACTIVE_ADS_TIER_750_K = "ACTIVE_ADS_TIER_750K"
    ACTIVE_ADS_TIER_1_M = "ACTIVE_ADS_TIER_1M"


@dataclass_json
@dataclass
class AccountActiveAdSummary:
    r"""AccountActiveAdSummary
    Gets a summary of active ads in an account.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    active_ads: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeAds') }})
    active_ads_limit_tier: Optional[AccountActiveAdSummaryActiveAdsLimitTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeAdsLimitTier') }})
    available_ads: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableAds') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
