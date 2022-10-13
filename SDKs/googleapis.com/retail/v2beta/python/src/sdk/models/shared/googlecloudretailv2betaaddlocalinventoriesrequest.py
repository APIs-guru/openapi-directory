from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betalocalinventory


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaAddLocalInventoriesRequest:
    add_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addMask' }})
    add_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addTime' }})
    allow_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowMissing' }})
    local_inventories: Optional[List[googlecloudretailv2betalocalinventory.GoogleCloudRetailV2betaLocalInventory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localInventories' }})
    
