from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CampaignGoalCampaignGoalTypeEnum(str, Enum):
    CAMPAIGN_GOAL_TYPE_UNSPECIFIED = "CAMPAIGN_GOAL_TYPE_UNSPECIFIED"
    CAMPAIGN_GOAL_TYPE_APP_INSTALL = "CAMPAIGN_GOAL_TYPE_APP_INSTALL"
    CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS = "CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS"
    CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION = "CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION"
    CAMPAIGN_GOAL_TYPE_ONLINE_ACTION = "CAMPAIGN_GOAL_TYPE_ONLINE_ACTION"


@dataclass_json
@dataclass
class CampaignGoal:
    r"""CampaignGoal
    Settings that control the goal of a campaign.
    """
    
    campaign_goal_type: Optional[CampaignGoalCampaignGoalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignGoalType') }})
    performance_goal: Optional[PerformanceGoal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceGoal') }})
    
