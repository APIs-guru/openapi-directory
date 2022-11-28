from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOfOrders:
    links: Optional[PaginationLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    orders: Optional[List[OrderHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    
