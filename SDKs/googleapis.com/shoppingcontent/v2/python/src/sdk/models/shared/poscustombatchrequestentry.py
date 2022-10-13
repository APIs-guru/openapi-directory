from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import posinventory
from . import possale
from . import posstore


@dataclass_json
@dataclass
class PosCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    inventory: Optional[posinventory.PosInventory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    sale: Optional[possale.PosSale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sale' }})
    store: Optional[posstore.PosStore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'store' }})
    store_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeCode' }})
    target_merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetMerchantId' }})
    
