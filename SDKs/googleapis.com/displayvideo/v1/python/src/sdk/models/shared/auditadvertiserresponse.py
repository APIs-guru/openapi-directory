from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuditAdvertiserResponse:
    ad_group_criteria_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adGroupCriteriaCount' }})
    campaign_criteria_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignCriteriaCount' }})
    channels_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelsCount' }})
    negative_keyword_lists_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeKeywordListsCount' }})
    negatively_targeted_channels_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativelyTargetedChannelsCount' }})
    used_campaigns_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedCampaignsCount' }})
    used_insertion_orders_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedInsertionOrdersCount' }})
    used_line_items_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedLineItemsCount' }})
    
