from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Item:
    r"""Item
    A single list item. Each variation of an item in the price list should have its own Item with its own price data.
    """
    
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    labels: Optional[List[Label]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
