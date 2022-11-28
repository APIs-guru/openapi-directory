from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChangePlanRequest:
    r"""ChangePlanRequest
    JSON template for the ChangePlan rpc request.
    """
    
    deal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealCode') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    plan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planName') }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    seats: Optional[Seats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seats') }})
    
