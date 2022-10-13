from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import adslot
from . import lastmodifiedinfo
from . import pricing

class InventoryItemTypeEnum(str, Enum):
    PLANNING_PLACEMENT_TYPE_REGULAR = "PLANNING_PLACEMENT_TYPE_REGULAR"
    PLANNING_PLACEMENT_TYPE_CREDIT = "PLANNING_PLACEMENT_TYPE_CREDIT"


@dataclass_json
@dataclass
class InventoryItem:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    ad_slots: Optional[List[adslot.AdSlot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adSlots' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    content_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentCategoryId' }})
    estimated_click_through_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedClickThroughRate' }})
    estimated_conversion_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedConversionRate' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_plan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inPlan' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modified_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    negotiation_channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negotiationChannelId' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    placement_strategy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placementStrategyId' }})
    pricing: Optional[pricing.Pricing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    rfp_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rfpId' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'siteId' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    type: Optional[InventoryItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
