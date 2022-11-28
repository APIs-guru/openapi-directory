from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PosCustomBatchResponseEntry:
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[Errors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inventory: Optional[PosInventory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    sale: Optional[PosSale] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sale') }})
    store: Optional[PosStore] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('store') }})
    
