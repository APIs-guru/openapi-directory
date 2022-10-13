from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import localinventory


@dataclass_json
@dataclass
class LocalinventoryCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    local_inventory: Optional[localinventory.LocalInventory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localInventory' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
