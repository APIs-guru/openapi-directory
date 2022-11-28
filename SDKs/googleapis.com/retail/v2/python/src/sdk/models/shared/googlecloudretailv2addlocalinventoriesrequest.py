from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2AddLocalInventoriesRequest:
    r"""GoogleCloudRetailV2AddLocalInventoriesRequest
    Request message for ProductService.AddLocalInventories method.
    """
    
    add_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addMask') }})
    add_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addTime') }})
    allow_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMissing') }})
    local_inventories: Optional[List[GoogleCloudRetailV2LocalInventory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localInventories') }})
    
