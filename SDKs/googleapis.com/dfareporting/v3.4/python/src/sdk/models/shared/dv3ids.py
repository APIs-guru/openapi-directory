from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Dv3Ids:
    dv_campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dvCampaignId' }})
    dv_creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dvCreativeId' }})
    dv_insertion_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dvInsertionOrderId' }})
    dv_line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dvLineItemId' }})
    dv_site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dvSiteId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
