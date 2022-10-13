from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price


@dataclass_json
@dataclass
class Sku:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    prices: Optional[List[price.Price]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prices' }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sku' }})
    
