from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import guestattributesentry


@dataclass_json
@dataclass
class GuestAttributesValue:
    items: Optional[List[guestattributesentry.GuestAttributesEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
