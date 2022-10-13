from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import seats


@dataclass_json
@dataclass
class ChangePlanRequest:
    deal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealCode' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    plan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planName' }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderId' }})
    seats: Optional[seats.Seats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seats' }})
    
