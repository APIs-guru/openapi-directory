from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errors
from . import posinventory
from . import possale
from . import posstore


@dataclass_json
@dataclass
class PosCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    inventory: Optional[posinventory.PosInventory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    sale: Optional[possale.PosSale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sale' }})
    store: Optional[posstore.PosStore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'store' }})
    
