from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2product


@dataclass_json
@dataclass
class GoogleCloudRetailV2SetInventoryRequest:
    allow_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMissing' }})
    inventory: Optional[googlecloudretailv2product.GoogleCloudRetailV2Product] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory' }})
    set_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setMask' }})
    set_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setTime' }})
    
