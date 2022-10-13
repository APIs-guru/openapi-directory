from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class MinimumOrderValueTableStoreCodeSetWithMov:
    store_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeCodes' }})
    value: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
