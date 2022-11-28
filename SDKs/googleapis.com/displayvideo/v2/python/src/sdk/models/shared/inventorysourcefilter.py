from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InventorySourceFilter:
    r"""InventorySourceFilter
    A filtering option for filtering on Inventory Source entities.
    """
    
    inventory_source_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySourceIds') }})
    
