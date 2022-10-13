from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2localinventory


@dataclass_json
@dataclass
class GoogleCloudRetailV2AddLocalInventoriesRequest:
    add_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addMask' }})
    add_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addTime' }})
    allow_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMissing' }})
    local_inventories: Optional[List[googlecloudretailv2localinventory.GoogleCloudRetailV2LocalInventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localInventories' }})
    
