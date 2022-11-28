from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InventoryItemTypeEnum(str, Enum):
    PLANNING_PLACEMENT_TYPE_REGULAR = "PLANNING_PLACEMENT_TYPE_REGULAR"
    PLANNING_PLACEMENT_TYPE_CREDIT = "PLANNING_PLACEMENT_TYPE_CREDIT"


@dataclass_json
@dataclass
class InventoryItem:
    r"""InventoryItem
    Represents a buy from the Planning inventory store.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    ad_slots: Optional[List[AdSlot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adSlots') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    content_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentCategoryId') }})
    estimated_click_through_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedClickThroughRate') }})
    estimated_conversion_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedConversionRate') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    in_plan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inPlan') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    negotiation_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negotiationChannelId') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    placement_strategy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementStrategyId') }})
    pricing: Optional[Pricing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricing') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    rfp_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rfpId') }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteId') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    type: Optional[InventoryItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
