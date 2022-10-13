from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IDFilter:
    ad_group_ad_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adGroupAdIds' }})
    ad_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adGroupIds' }})
    campaign_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignIds' }})
    insertion_order_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertionOrderIds' }})
    line_item_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemIds' }})
    media_product_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaProductIds' }})
    
