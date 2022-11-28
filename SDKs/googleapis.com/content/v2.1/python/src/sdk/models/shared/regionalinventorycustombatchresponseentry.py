from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionalinventoryCustomBatchResponseEntry:
    r"""RegionalinventoryCustomBatchResponseEntry
    A batch entry encoding a single non-batch regional inventory response.
    """
    
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchId') }})
    errors: Optional[Errors] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    regional_inventory: Optional[RegionalInventory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalInventory') }})
    
