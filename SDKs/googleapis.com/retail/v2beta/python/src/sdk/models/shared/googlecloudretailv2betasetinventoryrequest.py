from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSetInventoryRequestInput:
    r"""GoogleCloudRetailV2betaSetInventoryRequestInput
    Request message for ProductService.SetInventory method.
    """
    
    allow_missing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowMissing') }})
    inventory: Optional[GoogleCloudRetailV2betaProductInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory') }})
    set_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setMask') }})
    set_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setTime') }})
    
