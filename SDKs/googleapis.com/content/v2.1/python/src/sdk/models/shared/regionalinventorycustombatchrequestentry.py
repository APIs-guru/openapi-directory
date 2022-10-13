from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import regionalinventory


@dataclass_json
@dataclass
class RegionalinventoryCustomBatchRequestEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    regional_inventory: Optional[regionalinventory.RegionalInventory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalInventory' }})
    
