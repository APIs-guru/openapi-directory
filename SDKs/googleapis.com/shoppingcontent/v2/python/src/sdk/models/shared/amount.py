from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import price
from . import price


@dataclass_json
@dataclass
class Amount:
    pretax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pretax' }})
    tax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    
