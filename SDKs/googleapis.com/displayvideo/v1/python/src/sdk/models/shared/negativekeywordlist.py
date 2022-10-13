from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NegativeKeywordList:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    negative_keyword_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negativeKeywordListId' }})
    targeted_line_item_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetedLineItemCount' }})
    
