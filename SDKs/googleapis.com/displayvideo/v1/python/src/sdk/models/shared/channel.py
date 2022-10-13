from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Channel:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    negatively_targeted_line_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativelyTargetedLineItemCount' }})
    partner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partnerId' }})
    positively_targeted_line_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positivelyTargetedLineItemCount' }})
    
