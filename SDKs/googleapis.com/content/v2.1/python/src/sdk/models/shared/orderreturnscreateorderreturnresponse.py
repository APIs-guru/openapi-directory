from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import merchantorderreturn


@dataclass_json
@dataclass
class OrderreturnsCreateOrderReturnResponse:
    execution_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionStatus' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    order_return: Optional[merchantorderreturn.MerchantOrderReturn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderReturn' }})
    
