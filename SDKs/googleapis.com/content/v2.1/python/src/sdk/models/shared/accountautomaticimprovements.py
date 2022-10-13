from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountimageimprovements
from . import accountitemupdates
from . import accountshippingimprovements


@dataclass_json
@dataclass
class AccountAutomaticImprovements:
    image_improvements: Optional[accountimageimprovements.AccountImageImprovements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageImprovements' }})
    item_updates: Optional[accountitemupdates.AccountItemUpdates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemUpdates' }})
    shipping_improvements: Optional[accountshippingimprovements.AccountShippingImprovements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingImprovements' }})
    
