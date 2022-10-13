from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import campaignbudget
from . import campaignflight
from . import campaigngoal
from . import frequencycap

class CampaignEntityStatusEnum(str, Enum):
    ENTITY_STATUS_UNSPECIFIED = "ENTITY_STATUS_UNSPECIFIED"
    ENTITY_STATUS_ACTIVE = "ENTITY_STATUS_ACTIVE"
    ENTITY_STATUS_ARCHIVED = "ENTITY_STATUS_ARCHIVED"
    ENTITY_STATUS_DRAFT = "ENTITY_STATUS_DRAFT"
    ENTITY_STATUS_PAUSED = "ENTITY_STATUS_PAUSED"
    ENTITY_STATUS_SCHEDULED_FOR_DELETION = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"


@dataclass_json
@dataclass
class Campaign:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    campaign_budgets: Optional[List[campaignbudget.CampaignBudget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignBudgets' }})
    campaign_flight: Optional[campaignflight.CampaignFlight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignFlight' }})
    campaign_goal: Optional[campaigngoal.CampaignGoal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignGoal' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    entity_status: Optional[CampaignEntityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entityStatus' }})
    frequency_cap: Optional[frequencycap.FrequencyCap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequencyCap' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
