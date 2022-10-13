from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import minimumordervaluetablestorecodesetwithmov


@dataclass_json
@dataclass
class MinimumOrderValueTable:
    store_code_set_with_movs: Optional[List[minimumordervaluetablestorecodesetwithmov.MinimumOrderValueTableStoreCodeSetWithMov]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeCodeSetWithMovs' }})
    
