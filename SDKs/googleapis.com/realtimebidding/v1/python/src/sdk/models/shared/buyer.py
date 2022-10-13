from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Buyer:
    active_creative_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeCreativeCount' }})
    bidder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidder' }})
    billing_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingIds' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    maximum_active_creative_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumActiveCreativeCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
