from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CampaignEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclass
class CampaignInput:
    r"""CampaignInput
    A single campaign.
    """
    
    campaign_budgets: Optional[List[CampaignBudget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignBudgets') }})
    campaign_flight: Optional[CampaignFlight] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignFlight') }})
    campaign_goal: Optional[CampaignGoal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignGoal') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[CampaignEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    frequency_cap: Optional[FrequencyCap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCap') }})
    

@dataclass_json
@dataclass
class Campaign:
    r"""Campaign
    A single campaign.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    campaign_budgets: Optional[List[CampaignBudget]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignBudgets') }})
    campaign_flight: Optional[CampaignFlight] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignFlight') }})
    campaign_goal: Optional[CampaignGoal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignGoal') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    entity_status: Optional[CampaignEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityStatus') }})
    frequency_cap: Optional[FrequencyCap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyCap') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
