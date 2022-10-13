from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import errors
from . import regionalinventory


@dataclass_json
@dataclass
class RegionalinventoryCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    errors: Optional[errors.Errors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    regional_inventory: Optional[regionalinventory.RegionalInventory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalInventory' }})
    
