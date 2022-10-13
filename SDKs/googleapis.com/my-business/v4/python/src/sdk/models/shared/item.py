from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import label
from . import money


@dataclass_json
@dataclass
class Item:
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    labels: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
