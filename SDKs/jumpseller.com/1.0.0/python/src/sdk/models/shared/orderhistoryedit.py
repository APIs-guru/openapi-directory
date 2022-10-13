from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderhistoryeditfields


@dataclass_json
@dataclass
class OrderHistoryEdit:
    order_history: Optional[orderhistoryeditfields.OrderHistoryEditFields] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_history' }})
    
