from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import performancegoal

class CampaignGoalCampaignGoalTypeEnum(str, Enum):
    CAMPAIGN_GOAL_TYPE_UNSPECIFIED = "CAMPAIGN_GOAL_TYPE_UNSPECIFIED"
    CAMPAIGN_GOAL_TYPE_APP_INSTALL = "CAMPAIGN_GOAL_TYPE_APP_INSTALL"
    CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS = "CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS"
    CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION = "CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION"
    CAMPAIGN_GOAL_TYPE_ONLINE_ACTION = "CAMPAIGN_GOAL_TYPE_ONLINE_ACTION"


@dataclass_json
@dataclass
class CampaignGoal:
    campaign_goal_type: Optional[CampaignGoalCampaignGoalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignGoalType' }})
    performance_goal: Optional[performancegoal.PerformanceGoal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performanceGoal' }})
    
