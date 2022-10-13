from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderhistoryfields


@dataclass_json
@dataclass
class OrderHistory:
    order_history: Optional[orderhistoryfields.OrderHistoryFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_history' }})
    
