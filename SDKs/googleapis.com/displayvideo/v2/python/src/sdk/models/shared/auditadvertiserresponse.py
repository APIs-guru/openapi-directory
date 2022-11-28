from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuditAdvertiserResponse:
    r"""AuditAdvertiserResponse
    Response message for AdvertiserService.AuditAdvertiser.
    """
    
    ad_group_criteria_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adGroupCriteriaCount') }})
    campaign_criteria_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignCriteriaCount') }})
    channels_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelsCount') }})
    negative_keyword_lists_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeKeywordListsCount') }})
    negatively_targeted_channels_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativelyTargetedChannelsCount') }})
    used_campaigns_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedCampaignsCount') }})
    used_insertion_orders_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedInsertionOrdersCount') }})
    used_line_items_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedLineItemsCount') }})
    
