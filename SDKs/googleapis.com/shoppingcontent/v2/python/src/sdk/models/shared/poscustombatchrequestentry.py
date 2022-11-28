from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PosCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    inventory: Optional[PosInventory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    sale: Optional[PosSale] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sale') }})
    store: Optional[PosStore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('store') }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storeCode') }})
    target_merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetMerchantId') }})
    
