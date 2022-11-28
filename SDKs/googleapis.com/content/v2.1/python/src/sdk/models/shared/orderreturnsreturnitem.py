from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderreturnsReturnItem:
    refund: Optional[OrderreturnsRefundOperation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refund') }})
    reject: Optional[OrderreturnsRejectOperation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reject') }})
    return_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnItemId') }})
    
