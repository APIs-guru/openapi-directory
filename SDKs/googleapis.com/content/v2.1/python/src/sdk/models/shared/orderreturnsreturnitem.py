from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderreturnsrefundoperation
from . import orderreturnsrejectoperation


@dataclass_json
@dataclass
class OrderreturnsReturnItem:
    refund: Optional[orderreturnsrefundoperation.OrderreturnsRefundOperation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund' }})
    reject: Optional[orderreturnsrejectoperation.OrderreturnsRejectOperation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reject' }})
    return_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnItemId' }})
    
