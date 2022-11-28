from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionalinventoryCustomBatchRequestEntry:
    r"""RegionalinventoryCustomBatchRequestEntry
    A batch entry encoding a single non-batch regional inventory request.
    """
    
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    regional_inventory: Optional[RegionalInventory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalInventory') }})
    
